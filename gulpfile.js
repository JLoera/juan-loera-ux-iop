var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');

gulp.task('copy-index', ['clean'], function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-bootstrap', ['copy-index'], function(){
  return gulp.src('./src/sass/bootstrap.css')
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('scripts',['copy-bootstrap'], function() {
  return gulp.src([
    './node_modules/angular/angular.js',
    './node_modules/angular-resource/angular-resource.js',
    './node_modules/angular-ui-router/build/angular-ui-router.js',
    './src/js/**/*.js',
    './temp/templates.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('templ-cache', function () {
  return gulp.src('./src/partials/*.html')
    .pipe(templateCache('templates.js', {templateHeader: 'myApp.run([\'$templateCache\', function($templateCache) {'}))
    .pipe(gulp.dest('./temp'));
});

gulp.task('clean', function () {
    return gulp.src('./dist/**/*', {read: false})
        .pipe(clean());
});

gulp.task('js-hint', function(){
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass',['clean'],function(){
  gulp.src('./src/sass/**/*.{scss,sass}')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('connect', function() {
  connect.server({
    root: ['dist', __dirname],
    port:1820,
    livereload: true
  });
});

gulp.task('html',['scripts'], function () {
  gulp.src('./dist/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*'], ['clean','copy-index','sass','js-hint','copy-bootstrap','scripts','templ-cache','html']);
});

gulp.task('default', ['connect', 'sass', 'watch', 'js-hint','clean','copy-index', 'copy-bootstrap', 'scripts', 'templ-cache']);
