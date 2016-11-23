/* Template */

var gulp = require('gulp'),
		packageJSON = require('./package.json'),
    browserSync = require('browser-sync').create(),
		jshint = require('gulp-jshint'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		twig = require('gulp-twig'),
		less = require('gulp-less'),
		postcss = require('gulp-postcss'),
		unmq = require('postcss-unmq'),
		bless = require('gulp-bless'),
		modernizr = require('gulp-modernizr'),
		svgSprite = require('gulp-svg-sprite'),
		imagemin = require('gulp-imagemin'),
		realFavicon = require('gulp-real-favicon'),
		clean = require('gulp-real-favicon');

gulp.task('jshint', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('concat', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('uglify', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('includereplace', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('twig', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('includeSource', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('less', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('postcss', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('stripmq', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('bless', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('modernizr', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('svg_sprite', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('imagemin', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('realFavicon', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('clean', function() {

  return gulp.src('src/')
		.pipe()
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

});

gulp.task('browserSync', function() {

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

  gulp.watch('src/', ['task']);

});
