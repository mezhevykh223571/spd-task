import gulp from 'gulp'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import less from 'gulp-less'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import terser from 'gulp-terser'
import rollup from 'gulp-better-rollup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'

import { handleError, project, targets } from '../index'

// Styles
const styleSrcDir = project.sourceDirectory + '/' + project.stylesDirectory
const styleDest = project.distDirectory + '/' + project.stylesDirectory
const cssFileName = project.cssMinFileName
const autoprefixerSettings = targets.autoprefixer

// JS
const jsPaths = project.sourceDirectory + '/' + project.scriptsDirectory + '/**/*.js'
const jsDest = project.distDirectory + '/' + project.scriptsDirectory
const jsFileName = project.jsMinFileName

export default function () {
  function styles () {
    return gulp
      .src(styleSrcDir + '/**/*.less')
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer({
          browsers: autoprefixerSettings,
          cascade: false,
        })
      )
      .pipe(cleanCSS())
      .pipe(concat(cssFileName))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(styleDest))
  }

  function scripts () {
    return gulp
      .src(jsPaths)
      .pipe(rollup({
        plugins: [
          resolve({
            preferBuiltins: false,
          }),
          babel({
            compact: true,
          }),
          commonjs(),
          globals(),
          builtins(),
        ]
      }, 'umd'))
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(sourcemaps.init())
      .pipe(babel({ compact: true }))
      .pipe(concat(jsFileName))
      .pipe(terser())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(jsDest))
  }

  return function () {
    gulp.watch(styleSrcDir, styles)
    gulp.watch(jsPaths, scripts)
  }
}
