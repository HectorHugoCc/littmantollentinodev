const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

//pug
gulp.task('pug', function () {
  return gulp.src('./dev/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'));
  });
  
//sass
gulp.task('sass', function () {
  gulp.src('./dev/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

//js
gulp.task('js-dev', function () {
  return gulp.src('./dev/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'));
});

//run
gulp.task('default', function () {

  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch("./dev/**/*.*", ['js-dev', 'pug', 'sass']);
  gulp.watch("./dev/**/*.*").on('change', browserSync.reload);
});