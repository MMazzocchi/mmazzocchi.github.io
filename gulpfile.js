const { src, task, series, dest } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const { basename, join } = require('path');
const eslint = require('gulp-eslint');

const SRC = './src/';
const MAIN = join(SRC, 'main.js');
const JS = './js/';

function build() {
  const filename = basename(MAIN);

  return browserify(MAIN)
    .transform("babelify", {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    })
    .bundle()
    .pipe(source(filename))
    .pipe(dest(JS));
};

function lint() {
  return src([join(SRC, "**", "*.js")])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};

task('build', build);
task('lint', lint);
task('default', series('lint', 'build'));