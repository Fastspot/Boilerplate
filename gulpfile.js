var gulp = require('gulp'),
		packageJSON = require('./package.json'),
		browserSync = require('browser-sync').create(),
		del = require('del'),
		twig = require('gulp-twig'),
		directoryMap = require('gulp-directory-map'),
		rename = require('gulp-rename'),
		replaceInclude = require('gulp-replace-include'),
		concat = require('gulp-concat-multi'),
		jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		uglify = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		svgSprite = require('gulp-svg-sprite');


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


gulp.task('create-sitemap', ['twig'], function () {

	return gulp.src('static/templates/*.html')
		.pipe(directoryMap({
			filename: 'sitemap.json',
			prefix: 'links'
		}))
		.pipe(gulp.dest('./'));

});


gulp.task('sitemap', ['create-sitemap'], function() {

	return gulp.src('static/index.twig')
		.pipe(twig({
			data: require('./sitemap.json')
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('scripts', function () {

	concat(packageJSON.js)
		.pipe(uglify())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());

});


gulp.task('jshint', function() {

	return gulp.src('js/src/modules/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));

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


gulp.task('sprite', function() {

 	return gulp.src('images/src/icons/*')
		.pipe(svgSprite({
			svg: {
				xmlDeclaration: false,
				doctypeDeclaration: false,
				dimensionAttributes: true
			},
			mode: {
				view: {
					dest: './',
					bust: false,
					prefix: '.icon_%s',
					dimensions: '_dims',
					render: {
						less: {
							dest: '../css/src/imports/icons.less'
						}
					},
					example: {
						dest: './icons.html'
					}
				}
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


gulp.task('browser-sync', function() {

	browserSync.init({
		logPrefix: packageJSON.name,
		ui: false,
		server: './',
		startPath: "/static/index.html",
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
	gulp.watch('js/src/**/**.js', ['scripts', 'jshint']);

});


gulp.task('default', [
	'watch',
	'browser-sync'
]);
