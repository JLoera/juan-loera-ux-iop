var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('js-hint', function(){
  return gulp.src('./src/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass',function(){
  gulp.src('./src/sass/**/*.{scss,sass}')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/sass'));
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    port:1820,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.{html,css}')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch('./src/sass/**/*.{scss,sass}', ['sass']);
  gulp.watch('./src/sass/**/*.css', ['html']);
  gulp.watch(['./src/js/*.js'], ['js-hint']);
});

gulp.task('default', ['connect', 'sass', 'watch', 'js-hint']);
