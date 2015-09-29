var gulp = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');

gulp.task('connect', 'Connects to localhost:1820', function() {
  connect.server({
    root: '',
    port:1820,
    livereload: true
  });
});

gulp.task('html', 'Reloads connect task', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', 'Watches for changes in files and calls html task once a change is made', function () {
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', 'Loads connect and watch tasks', ['connect','watch']);
