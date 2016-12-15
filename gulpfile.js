var gulp = require('gulp'),
		packageJSON = require('./package.json'),
		del = require('del'),
		twig = require('gulp-twig'),
		rename = require('gulp-rename'),
		imagemin = require('gulp-imagemin');


gulp.task('twig', function () {

	return gulp.src([
		'static/src/templates/*.twig',
		'!static/src/templates/_*.twig'
	])
		.pipe(twig({
			data: packageJSON
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/templates/'));

});


gulp.task('imagemin', function () {

	return gulp.src([
		'images/src/*',
		'!images/src/**/*'
	])
		.pipe(imagemin({
			options: {
				svgoPlugins: [{
					removeViewBox: true
				}]
			}
		}))
		.pipe(gulp.dest('images/'));

});

gulp.task('clean', function () {

	return del([
		'static/templates',
		'!static/src/**',

		'images/*',
		'!images/src/**',

		'css/*',
		'!css/src/**',

		'js/*',
		'!js/src/**'
	]);

});


gulp.task('watch', function() {

	gulp.watch('static/src/**/**.twig', ['twig']);

});


gulp.task('default', []);
