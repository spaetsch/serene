'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var minify-css = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('sass:watch', function () {
  gulp.watch('./dev/scss/**/*.scss', ['sass']);
});

gulp.task('copy-HTML', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
    return gulp.src('dev/**/*.html')
    .pipe(gulp.dest('build/'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
  gulp.src('./dev/scss/**/*.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest('./dev/CSS/'));
});

gulp.task('webpackdev', function() {
  return gulp.src('./dev/js/**.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./dev/CSS/*.css')
    .pipe(minify-css({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/CSS/'));
});

gulp.task('build', ['copy-HTML', 'webpackdev', 'sass', 'minify-css']);
