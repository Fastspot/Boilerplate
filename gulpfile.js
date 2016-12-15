var gulp = require('gulp'),
		packageJSON = require('./package.json'),
		browserSync = require('browser-sync').create(),
		del = require('del'),
		fs = require('fs'),
		twig = require('gulp-twig'),
		rename = require('gulp-rename'),
		data = require('gulp-data'),
		concat = require('gulp-concat-multi'),
		uglify = require('gulp-uglify'),
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
		.pipe(gulp.dest('static/templates/'))
		.pipe(browserSync.stream());

});

gulp.task('scripts', function () {

	concat(packageJSON.js)
		.pipe(data(function() {
			return require('./package.json');
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());

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
		.pipe(gulp.dest('images/'))
		.pipe(browserSync.stream());

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


gulp.task('browser-sync', function() {

	browserSync.init({
		logPrefix: packageJSON.name,
		ui: false,
		server: './',
		notify: {
			styles: {
				top: 'auto',
				bottom: '0',
				padding: '4px',
				fontSize: '12px',
				borderBottomLeftRadius: '0'
			}
		}
	});

});


gulp.task('watch', function() {

	gulp.watch('static/src/**/**.twig', ['twig']);
	gulp.watch('js/src/**/**.js', ['scripts']);

});


gulp.task('default', [
	'watch',
	'browser-sync'
]);
