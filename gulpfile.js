const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('minify_prism_theme', function() {
	console.log(sass.compiler);
	return gulp
		.src('css/prism-base16-monokai.dark.css')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('css/'));
});

// a task to generate the css with sass
gulp.task('sass', function() {
	return gulp
		.src('scss/index.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('css/'));
});
gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', gulp.parallel([ 'sass' ]));
});
