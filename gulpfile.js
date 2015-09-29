var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');

gulp.task('js-hint', function(){
  return gulp.src('./JS/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js-hintwatch', function () {
  gulp.watch(['./JS/*.js'], ['js-hint']);
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    port:1820,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect','watch','js-hint', 'js-hintwatch']);
