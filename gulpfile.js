var gulp = require('gulp'),
		packageJSON = require('./package.json'),
		browserSync = require('browser-sync').create(),
		del = require('del'),
		util = require('gulp-util'),
		gulpif = require('gulp-if'),
		changed = require('gulp-changed'),
		twig = require('gulp-twig'),
		directoryMap = require('gulp-directory-map'),
		sassGlob = require('gulp-sass-glob'),
		sass = require('gulp-sass'),
		postcss = require('gulp-postcss'),
		cssnano = require('gulp-cssnano'),
		bless = require('gulp-bless'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat-multi'),
		jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		uglify = require('gulp-uglify'),
		modernizr = require('gulp-modernizr'),
		imagemin = require('gulp-imagemin'),
		svgSprite = require('gulp-svg-sprite');


gulp.task('twig', function() {

	return gulp.src([
		'static/src/templates/*.twig',
		'!static/src/templates/_*.twig'
	])
		.pipe(twig({
			data: packageJSON,
			cache: true
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/templates/'))
		.pipe(browserSync.stream({
			once: true
		}));

});


gulp.task('create-sitemap', ['twig'], function() {

	return gulp.src('static/templates/*.html')
		.pipe(directoryMap({
			filename: 'sitemap.json',
			prefix: 'templates'
		}))
		.pipe(gulp.dest('./'));

});


gulp.task('sitemap', ['create-sitemap'], function() {

	return gulp.src('static/index.twig')
		.pipe(twig({
			data: {
				name: packageJSON.name,
				sitemap: require('./sitemap.json')
			}
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('sass', function() {

	return gulp.src('css/src/site.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([
			require('postcss-pxtorem')({
				propList: [
					'font-size',
					'letter-spacing'
				],
				replace: false
			}),
			require('autoprefixer')({
				browsers: ['> 1%']
			}),
			require('postcss-assets')({
				cachebuster: true,
				baseUrl: '..'
			}),
			require('postcss-discard-empty')
		]))
		.pipe(gulpif(util.env.production, cssnano()))
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.stream());

});


gulp.task('ie-css', ['sass'], function() {

	return gulp.src([
		'css/site.css'
	])
		.pipe(gulpif(util.env.production, postcss([
			require('postcss-unmq'),
			require('postcss-discard-empty')
		])))
		.pipe(gulpif(util.env.production, bless({
			cacheBuster: false,
			log: true
		})))
		.pipe(gulpif(util.env.production, rename({
			basename: 'site-ie'
		})))
		.pipe(gulpif(util.env.production, gulp.dest('css/')));

});


gulp.task('scripts', function() {

	concat(packageJSON.js)
		.pipe(gulpif(util.env.production, uglify()))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());

});


gulp.task('jshint', function() {

	return gulp.src('js/src/modules/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));

});


gulp.task('modernizr', function() {

	return gulp.src([
		'js/src/modules/*.js',
		'css/site.css'
	])
		.pipe(modernizr({
			options: [
				'load',
				'setClasses',
				'testProp',
				'fnBind'
			]
		}))
		.pipe(gulpif(util.env.production, uglify()))
		.pipe(gulp.dest('js/'));

});

gulp.task('sprite', function() {

 	return gulp.src('images/src/icons/*')
		.pipe(svgSprite({
			svg: {
				xmlDeclaration: false,
				doctypeDeclaration: false,
				namespaceIDs: false,
				dimensionAttributes: true
			},
			mode: {
				symbol: {
					dest: './'
				}
			}
		}))
		.pipe(gulp.dest('images/'))
		.pipe(browserSync.stream());

});


gulp.task('imagemin', function() {

	return gulp.src([
		'images/src/*',
		'!images/src/icons/'
	])
		.pipe(imagemin())
		.pipe(gulp.dest('images/'))
		.pipe(browserSync.stream());

});


gulp.task('clean', function() {

	return del([
		'static/templates',
		'!static/src/**',

		'images/*',
		'!images/src/**',
		'!images/svg/**',

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

	gulp.watch('static/src/**/*.twig', ['twig']);
	gulp.watch('css/src/**/**', ['sass', 'ie-css', 'modernizr']);
	gulp.watch('js/src/**/**.js', ['scripts', 'jshint']);
	gulp.watch('images/src/icons/*', ['sprite']);
	gulp.watch('images/src/*', ['imagemin']);

});


gulp.task('default', [
	'build',
	'watch',
	'browser-sync'
]);


gulp.task('build', [
	'sitemap',
	'sprite',
	'imagemin',
	'sass',
	'ie-css',
	'scripts',
	'modernizr'
]);
