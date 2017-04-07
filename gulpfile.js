var gulp = require('gulp'),
		packageJSON = require('./package.json'),
		browserSync = require('browser-sync').create(),
		del = require('del'),
		util = require('gulp-util'),
		gulpif = require('gulp-if'),
		changed = require('gulp-changed'),
		newer = require('gulp-newer'),
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
		.pipe(gulp.dest('static/templates/'));

});


gulp.task('create-sitemap', function() {

	return gulp.src('static/templates/*.html')
		.pipe(directoryMap({
			filename: 'sitemap.json',
			prefix: 'templates'
		}))
		.pipe(gulp.dest('./'));

});


gulp.task('sitemap', function(done) {

	gulp.src('static/index.twig')
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

	done();

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
			})
		]))
		.pipe(gulpif(util.env.production, cssnano()))
		.pipe(gulp.dest('css/'))
		.pipe(gulpif(util.env.production, postcss([
			require('postcss-unmq')
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

	return concat(packageJSON.js)
		.pipe(gulpif(util.env.production, uglify()))
		.pipe(gulp.dest('./'));

});


gulp.task('jshint', function(done) {

	gulp.src('js/src/modules/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));

	done();

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
		.pipe(gulp.dest('images/'));

});


gulp.task('imagemin', function() {

	return gulp.src([
		'images/src/*',
		'!images/src/icons/'
	])
		.pipe(newer('images/'))
		.pipe(imagemin())
		.pipe(gulp.dest('images/'));

});


gulp.task('clean', function(done) {

	del([
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

	done();

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


gulp.task('reload', function(done) {

	browserSync.reload();

	done();

});


gulp.task('watch', function() {

	gulp.watch('static/src/**/*.twig', gulp.series('twig', 'reload'));
	gulp.watch('css/src/**/**', gulp.series('sass', 'modernizr', 'reload'));
	gulp.watch('js/src/**/**.js', gulp.series(gulp.parallel('scripts', 'jshint'), 'reload'));
	gulp.watch('images/src/icons/*', gulp.series('sprite', 'reload'));
	gulp.watch('images/src/*', gulp.series('imagemin', 'reload'));

});

gulp.task('build', gulp.parallel(
	gulp.series(
		'twig',
		'create-sitemap',
		'sitemap'
	),
	'sass',
	'scripts',
	'sprite',
	'imagemin'
));

gulp.task('default', gulp.series(
	gulp.parallel(
		'build',
		'watch',
		'browser-sync'
	),
	'reload'
));
