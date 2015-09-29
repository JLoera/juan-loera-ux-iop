var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('sass',function(){
  gulp.src('./sass/**/*.{scss,sass}')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    port:1820,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.{html,css}')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./sass/**/*.{scss,sass}', ['sass']);
  gulp.watch('./css/**/*.css', ['html']);
});

gulp.task('default', [ 'sass', 'connect', 'watch']);
