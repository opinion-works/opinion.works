const config = require('../blog.config.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const jpegtran = require('imagemin-jpegtran');
const pngquant = require('imagemin-pngquant');
const newer    = require('gulp-newer');
const plumber  = require('gulp-plumber');

gulp.task('imagemin', function () {
  return gulp.src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(imagemin([
      imagemin.gifsicle(config.imagemin.gif),
      imagemin.jpegtran(config.imagemin.jpeg),
      imagemin.optipng(config.imagemin.png),
      imagemin.svgo(config.imagemin.svg)
    ]))
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));
         });
