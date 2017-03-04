var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var source = 'app/';

var outputDir = 'dist/';

var htmlSources = 
{
	in: 
	[
	'app/index.html'
	],
	out: outputDir + 'scripts/'	
};

var cssSources = 
{
	in:
	[
		source + 'styles/main.css'
	],
	out: outputDir + 'styles/'
}

gulp.task('htmlhint', function() {
  return gulp.src(htmlSources.in)
  .pipe(plugins.htmlhint('.htmlhintrc'))
  .pipe(plugins.htmlhint.reporter("htmlhint-stylish"))
  .pipe(plugins.connect.reload());;
});

gulp.task('csshint', function() {
  return gulp.src(cssSources.in)
  .pipe(plugins.connect.reload());;
})

gulp.task('watch', function() {

  gulp.watch(cssSources.in, ['csshint'])
  	.on('change', function(file){
  		plugins.util.log(plugins.util.colors.blue.bold('Actualizado CSS: ' + ' (' + file.path + ')'));
  	});

  gulp.watch(htmlSources.in, ['htmlhint'])
  	.on('change', function(file){
  		plugins.util.log(plugins.util.colors.yellow.bold('Actualizado HTML: ' + ' (' + file.path + ')'));
  	});
});

gulp.task('serve', ['connect_dev', 'watch']);

gulp.task('connect_dev', function() {
  plugins.connect.server({
  	port: 8000,
    root: source,
    livereload: true
  });
});