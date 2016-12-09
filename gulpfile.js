var site = 'dist/';
var gulp = require('gulp'),
		packageJSON = require('./package.json'),
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
		'images/src/**/*',
		'!images/src/icons/**'
	])
		.pipe(imagemin({

		}))
		.pipe(gulp.dest('images'));

});


gulp.task('watch', function() {

	gulp.watch('static/src/**/**.twig', ['twig']);

});


gulp.task('default', []);
