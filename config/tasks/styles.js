import gulp from 'gulp'
import less from 'gulp-less'
import plumber from 'gulp-plumber'
import gif from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import concat from 'gulp-concat'

import { handleError, liveEnv, targets, project } from '../index'

const lessPaths = project.sourceDirectory + '/' + project.stylesDirectory + '/main.less'
const autoprefixerSettings = targets.autoprefixer
const cssFileName = project.cssMinFileName
const dest = project.distDirectory + '/' + project.stylesDirectory

export default function () {
  return function () {
    return gulp
      .src(lessPaths)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(gif(!liveEnv, sourcemaps.init()))
      .pipe(less())
      .pipe(autoprefixer({
          browsers: autoprefixerSettings,
          cascade: false,
        })
      )
      .pipe(cleanCSS())
      .pipe(concat(cssFileName))
      .pipe(gif(!liveEnv, sourcemaps.write()))
      .pipe(gulp.dest(dest))
  }
}
