var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var Server = require('karma').Server;

gulp.task('unit-test', function (done) {
  new Server({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('clean', function () {
    return gulp.src(['./dist/*', './temp/*'], {read: false})
        .pipe(clean());
});

gulp.task('copy-index', ['clean'], function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-toastercss', ['clean'], function(){
  return gulp.src('./node_modules/angularjs-toaster/toaster.css')
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('copy-bootstrap', ['copy-toastercss'], function(){
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('sass',['copy-bootstrap'],function(){
  gulp.src('./src/sass/**/*.{scss,sass}')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js-hint', function(){
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts',['templ-cache'], function() {
  return gulp.src([
    './node_modules/angular/angular.js',
    './node_modules/angular-resource/angular-resource.js',
    './node_modules/angular-ui-router/build/angular-ui-router.js',
    './node_modules/angularjs-toaster/toaster.js',
    './src/js/**/*.js',
    './temp/templates.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('templ-cache', ['clean'], function () {
  return gulp.src('./src/partials/*.html')
    .pipe(templateCache('templates.js', {templateHeader: 'myApp.run([\'$templateCache\', function($templateCache) {'}))
    .pipe(gulp.dest('./temp'));
});

gulp.task('connect', function() {
  connect.server({
    root: ['dist', __dirname],
    port:1820,
    livereload: true
  });
});

gulp.task('html',['scripts'], function () {
  gulp.src('./dist/**/*')
    .pipe(connect.reload());
});

gulp.task('clean-temp',['html'], function(){
  return gulp.src(['./temp'], {read: false})
      .pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*'], ['clean','copy-index', 'copy-toastercss', 'copy-bootstrap', 'sass', 'js-hint', 'scripts', 'templ-cache', 'html', 'clean-temp', 'unit-test']);
});

gulp.task('default', ['connect', 'watch', 'clean','copy-index', 'copy-toastercss', 'copy-bootstrap', 'sass', 'js-hint', 'scripts', 'templ-cache', 'html', 'clean-temp', 'unit-test']);
