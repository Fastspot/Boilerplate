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


gulp.task('readme', function() {

	return gulp.src('twig/README.twig')
		.pipe(twig({
			data: packageJSON
		}))
		.pipe(rename({
			extname: '.md'
		}))
		.pipe(gulp.dest('./'));

});


gulp.task('twig', function() {

	return gulp.src([
		'twig/templates/*.twig',
		'!twig/templates/_*.twig'
	])
		.pipe(twig({
			data: packageJSON,
			cache: true
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/templates'));

});


gulp.task('create-sitemap', function() {

	return gulp.src('static/templates/*.html')
		.pipe(directoryMap({
			filename: 'sitemap.json',
			prefix: 'templates'
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('sitemap', function(done) {

	gulp.src('twig/index.twig')
		.pipe(twig({
			data: {
				name: packageJSON.name,
				sitemap: require('./static/sitemap.json')
			}
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/'));

	done();

});


gulp.task('sass', function() {

	return gulp.src('css/site.scss')
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
			})
		]))
		.pipe(gulpif(util.env.production, cssnano()))
		.pipe(gulp.dest('static/css'))
		.pipe(browserSync.stream())
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
		.pipe(gulpif(util.env.production, gulp.dest('static/css')));

});


gulp.task('scripts', function() {

	return concat(packageJSON.js)
		.pipe(gulpif(util.env.production, uglify()))
		.pipe(gulp.dest('static/'));

});


gulp.task('jshint', function() {

	return gulp.src('js/modules/*.js', {
		since: gulp.lastRun('jshint')
	})
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));

});


gulp.task('modernizr', function() {

	return gulp.src([
		'static/js/modules/*.js',
		'static/css/site.css'
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
		.pipe(gulp.dest('static/js'));

});


gulp.task('sprite', function() {

	return gulp.src('icons/*')
		.pipe(svgSprite({
			svg: {
				xmlDeclaration: false,
				doctypeDeclaration: false,
				namespaceIDs: false,
				dimensionAttributes: true
			},
			mode: {
				inline: true,
				symbol: {
					dest: 'static/'
				}
			}
		}))
		.pipe(gulp.dest('.'));

});


gulp.task('imagemin', function() {

	return gulp.src('images/*')
		.pipe(newer('static/images/'))
		.pipe(imagemin())
		.pipe(gulp.dest('static/images'));

});


gulp.task('clean', function(done) {

	del('static');

	done();

});


gulp.task('nuke', function(done) {

	del('static');
	del('components');

	done();

});


gulp.task('browser-sync', function(done) {

	browserSync.init({
		logPrefix: packageJSON.name,
		ui: false,
		server: './',
		startPath: '/static/index.html',
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

	done();

});


gulp.task('reload', function(done) {

	browserSync.reload();

	done();

});


gulp.task('watch', function() {

	gulp.watch('twig/**/*.twig', gulp.series('twig', 'reload'));
	gulp.watch('css/**/**', gulp.series('sass'));
	gulp.watch('js/**/**.js', gulp.series(gulp.parallel('scripts', 'jshint'), 'reload'));
	gulp.watch('icons/*', gulp.series('sprite', 'twig', 'reload'));
	gulp.watch('images/*', gulp.series('imagemin', 'reload'));

});


gulp.task('build', gulp.parallel(
	'readme',
	gulp.series(
		'sprite',
		'twig',
		'create-sitemap',
		'sitemap'
	),
	gulp.series(
		'sass',
		'scripts',
		'modernizr'
	),
	'imagemin'
));


gulp.task('default', gulp.series(
	'build',
	gulp.parallel(
		'watch',
		'browser-sync'
	)
));
