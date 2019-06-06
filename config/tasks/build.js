import gulp from 'gulp'

export default function () {
  return function (done) {
    return gulp
      .series(
        'styles', 'scripts', 'fonts', 'images'
      )(done)
  }
}
