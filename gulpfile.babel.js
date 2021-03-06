'use strict'

import styles from './config/tasks/styles'
import scripts from './config/tasks/scripts'
import clean from './config/tasks/clean'
import fonts from './config/tasks/fonts'
import images from './config/tasks/images'
import watch from './config/tasks/watch'
import serve from './config/tasks/serve'
import build from './config/tasks/build'

exports.styles = styles()
exports.scripts = scripts()
exports.clean = clean()
exports.fonts = fonts()
exports.images = images()
exports.watch = watch()
exports.serve = serve()
exports.default = build()
