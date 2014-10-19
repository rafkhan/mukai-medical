/* global require:false */

var gulp = require('gulp');
var less = require('gulp-less');

var lessFiles = './css/less/**/*.less';

gulp.task('less', function () {
  'use strict'; //fuck you too jshint
  gulp.src(lessFiles)
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('less-watch', function() {
  'use strict'; //double fuck you too jshint
  gulp.watch(lessFiles, ['less']);
});
