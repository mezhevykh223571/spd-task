import gulp from 'gulp'
import serve from 'gulp-serve'

import { server } from '../index'

const serverPort = server.port

export default function () {
  return gulp.task('serve', serve({
      root: './',
      port: serverPort,
    })
  )
}
