var gulp = require('gulp'),
		reload = require('require-reload')(require),
		fs = require('fs'),
		shell = require('gulp-shell'),
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
		svgSprite = require('gulp-svg-sprite'),
		realFavicon = require ('gulp-real-favicon'),
		access = require('gulp-accessibility');


var source = {
	readme: 'src/twig/README.twig',
	twig: [
		'src/twig/templates/*.twig',
		'!src/twig/templates/_*.twig'
	],
	templates: 'static/templates/*.html',
	sitemap: 'src/twig/index.twig',
	sass: 'src/css/site.scss',
	jshint: 'src/js/modules/*.js',
	modernizr: [
		'js/modules/*.js',
		'css/site.css'
	],
	sprite: 'src/icons/*',
	images: 'src/images/*'
};

var watch = {
	twig: 'src/twig/**/*.twig',
	sass: 'src/css/**/**',
	js: 'src/js/**/**.js',
	formstone: 'node_modules/formstone/src/js/*.js',
	sprite: 'src/icons/*',
	images: 'src/images/*'
};


gulp.task('readme', function(done) {

	fs.stat(source.readme, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			gulp.src(source.readme)
				.pipe(twig({
					data: packageJSON
				}))
				.pipe(rename({
					extname: '.md'
				}))
				.pipe(gulp.dest('./'));
		}
	});

	done();

});


gulp.task('twig', function() {

	return gulp.src(source.twig)
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

	return gulp.src(source.templates)
		.pipe(directoryMap({
			filename: 'sitemap.json',
			prefix: 'templates'
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('sitemap', function() {

	return gulp.src(source.sitemap)
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

});


gulp.task('sass', function() {

	return gulp.src(source.sass)
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
				browsers: [
					'> 1%',
					'last 2 versions',
					'ie >= 10'
				]
			})
		]))
		.pipe(gulpif(util.env.production, cssnano()))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream())
		.pipe(gulpif(util.env.production, bless({
			cacheBuster: false,
			log: true
		})))
		.pipe(gulpif(util.env.production, gulp.dest('css')));

});


gulp.task('scripts', function() {

	return concat(packageJSON.js)
		.pipe(gulpif(util.env.production, uglify()))
		.pipe(gulp.dest('js'));

});


gulp.task('jshint', function() {

	return gulp.src(source.jshint, {
		since: gulp.lastRun('jshint')
	})
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));

});


gulp.task('modernizr', function() {

	return gulp.src(source.modernizr)
		.pipe(modernizr({
			options: [
				'load',
				'setClasses',
				'testProp',
				'fnBind'
			]
		}))
		.pipe(gulpif(util.env.production, uglify()))
		.pipe(gulp.dest('js'));

});


gulp.task('sprite', function() {

	return gulp.src(source.sprite)
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
					dest: 'images',
					sprite: 'icons.svg',
				}
			}
		}))
		.pipe(gulp.dest('.'));

});


gulp.task('imagemin', function() {

	return gulp.src(source.images)
		.pipe(newer('images'))
		.pipe(imagemin())
		.pipe(gulp.dest('images'));

});

var FAVICON_DATA_FILE = 'favicons/markup.json';
gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: 'src/images/favicon.png',
		dest: 'favicons',
		iconsPath: '../../favicons/',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: packageJSON.vars.color,
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: packageJSON.vars.color,
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: packageJSON.vars.color
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});


gulp.task('inject-favicon-markups', function() {
	return gulp.src(['src/twig/partials/favicons.html' ])
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(gulp.dest('src/twig/partials/'));
});


gulp.task('check-for-favicon-update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});


gulp.task('test', function() {
	return gulp.src(source.templates)
		.pipe(access({
			force: true
		}))
		.on('error', console.log)
		.pipe(access.report({
			reportType: 'txt'
		}))
		.pipe(rename({
			extname: '.txt'
		}))
		.pipe(gulp.dest('reports'));
});


gulp.task('clean', function(done) {

	del('css');
	del('favicons');
	del('images');
	del('js');
	del('reports');
	del('static');

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


gulp.task('reset', function(done) {

	try {
		packageJSON = reload('./package.json');
	} catch (e) {
		console.error("Failed to reload package.json! Error: ", e);
	}

	done();

});


gulp.task('watch', function() {

	gulp.watch('package.json', gulp.series('reset', 'build', 'reload'));
	gulp.watch(watch.twig, gulp.series('twig', 'reload'));
	gulp.watch(watch.sass, gulp.series('sass'));
	gulp.watch(watch.js, gulp.series(gulp.parallel('scripts', 'jshint'), 'reload'));
	gulp.watch(watch.formstone, gulp.series('scripts', 'reload'));
	gulp.watch(watch.sprite, gulp.series('sprite', 'twig', 'reload'));
	gulp.watch(watch.images, gulp.series('imagemin', 'reload'));

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
