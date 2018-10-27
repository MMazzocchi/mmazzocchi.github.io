const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const basename = require('path').basename;

const MAIN = './src/main.js';
const JS = './js/';

function build() {
  const filename = basename(MAIN);

  return browserify(MAIN)
    .bundle()
    .pipe(source(filename))
    .pipe(gulp.dest(JS));
};

gulp.task('build', build);
gulp.task('default', gulp.series('build'));
