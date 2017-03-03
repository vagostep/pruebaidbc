var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var source = 'app/';

gulp.task('serve', ['connect']);

gulp.task('connect', function() {
  plugins.connect.server({
  	port: 8000,
    root: source,
    livereload: true
  });
});