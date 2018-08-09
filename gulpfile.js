var gulp = require('gulp'),
		reload = require('require-reload')(require),
		async = require('async'),
		fs = require('fs'),
		path = require('path'),
		globby = require('globby'),
		packageJSON = require('./package.json'),
		trelloKeyToken = require('trello-module'),
		browserSync = require('browser-sync').create(),
		del = require('del'),
		gulpif = require('gulp-if'),
		argv = require('yargs').argv,
		newer = require('gulp-newer'),
		twig = require('gulp-twig'),
		htmlbeautify = require('gulp-html-beautify'),
		directoryMap = require('gulp-folder-index'),
		sassGlob = require('gulp-sass-glob'),
		sass = require('gulp-sass'),
		postcss = require('gulp-postcss'),
		cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat-multi'),
		jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		uglify = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		svgSprite = require('gulp-svg-sprite'),
		realFavicon = require ('gulp-real-favicon'),
		FAVICON_DATA_FILE = 'favicons/markup.json',
		pa11y = require('pa11y'),
		Trello = require('node-trello'),
		trello = new Trello(trelloKeyToken.key(), trelloKeyToken.token()),
		markdown = require('markdown').markdown;


var source = {
	readme: 'src/twig/README.twig',
	trello: [
		'src/twig/templates/fs-components.twig',
		'src/twig/templates/fs-templates.twig',
		'src/twig/templates/fs-content-strategy.twig'
	],
	twig: [
		'src/twig/templates/*.twig',
		'!src/twig/templates/_*.twig',
		'!src/twig/templates/fs-components.twig',
		'!src/twig/templates/fs-templates.twig',
		'!src/twig/templates/fs-content-strategy.twig'
	],
	templates: 'static/templates/*.html',
	accessibility: [
		'static/templates/page*.html',
		'!static/templates/page-form-builder.html',
	],
	sitemap: 'src/twig/index.twig',
	jshint: 'src/js/modules/*.js',
	sprite: 'src/icons/*',
	images: 'src/images/*'
};

var watch = {
	trello: [
		'src/twig/templates/fs-components.twig',
		'src/twig/templates/fs-templates.twig',
		'src/twig/templates/fs-content-strategy.twig',
		'src/twig/partials/guidebook/trello-details.twig',
		'src/twig/partials/guidebook/trello-sections.twig',
		'src/twig/partials/guidebook/trello-js.twig'
	],
	twig: [
		'src/twig/**/*.twig',
		'!src/twig/templates/fs-components.twig',
		'!src/twig/templates/fs-templates.twig',
		'!src/twig/templates/fs-content-strategy.twig',
		'!src/twig/partials/guidebook/trello-details.twig',
		'!src/twig/partials/guidebook/trello-sections.twig',
		'!src/twig/partials/guidebook/trello-js.twig'
	],
	sass: 'src/css/**/**',
	js: 'src/js/**/*.js',
	sprite: 'src/icons/*',
	images: 'src/images/*'
};


gulp.task('trello', function(done) {

	if (packageJSON.vars.idBoardTrello !== "") {
		var types = [
			{
				name: "Feature",
				caption: "These components are your strongest and boldest, often used in specific circumstances such as your homepage or on landing pages."
			},
			{
				name: "Full-Width",
				caption: "These components use 100% of your grid horizontally and should be used primarily to make a strong impression in cases you don’t need sub-navigation."
			},
			{
				name: "In-Content",
				caption: "These components are paired with WYSIWYG content and provide emphasis higher up on the page."
			},
			{
				name: "Sidebar",
				caption: "These components are paired with your sub-navigation and can be used alongside WYSIWYG content."
			}
		];
		var deck = [];
		var cards = [];
		var contentStrategy = [];
		var templates = [];

		trello.get('/1/boards/' + packageJSON.vars.idBoardTrello + '/cards', {
			attachments: "cover",
			attachment_fields: [
				"url",
				"previews"
			],
			fields: [
				"name",
				"labels",
				"desc"
			]
		}, function(err, data) {
			if(err) {
				console.log(err);
			} else {
				for(card in data) {
					if(data[card].attachments.length > 0) {
						if(data[card].labels.find(findType)) {
							for(label in data[card].labels) {
								data[card].type = data[card].labels.find(findType).name;
							}

							data[card].desc = markdown.toHTML(data[card].desc);

							cards.push(data[card]);
						} else if(data[card].labels.find(findTemplate)) {
							data[card].desc = markdown.toHTML(data[card].desc);

							templates.push(data[card]);
						}
					} else if(data[card].labels.find(findContent)) {
						data[card].desc = markdown.toHTML(data[card].desc);

						contentStrategy.push(data[card]);
					}
				}

				cards.sort(function(a, b) {
					var nameA = a.type.toUpperCase();
					var nameB = b.type.toUpperCase();
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}

					return 0;
				});

				for (type in types) {
					deck.push({
						type: types[type].name,
						cards: []
					});

					for (card in cards) {
						if (cards[card].type == types[type].name) {
							deck[type].cards.push(cards[card]);
						}
					}
				}

				gulp.src(source.trello)
					.pipe(twig({
						data: {
							vars: packageJSON.vars,
							img: packageJSON.img,
							links: packageJSON.links,
							deck: deck,
							types: types,
							contentStrategy: contentStrategy,
							templates: templates
						}
					}))
					.pipe(rename({
						extname: '.html'
					}))
					.pipe(gulp.dest('static/templates'));
			}
		});

		function findContent(label) {
			return label.name === "Strategy";
		}

		function findTemplate(label) {
			return label.name === "Template";
		}

		function findType(label) {
			return label.name === "Feature" ||
						 label.name === "In-Content" ||
						 label.name === "Full-Width" ||
						 label.name === "Sidebar";
		}
	}

	done();

});


gulp.task('components', function(done) {

	var base = 'src/twig/components';

	fs.readdir(base, function(err, folders) {
		folders.forEach(function(folder) {
			fs.readdir(base + '/' + folder, function(err, mods) {
				var result = '{% extends "_base.twig" %}' +
					'{% block page %}' +
						'{% set page = {' +
							'title: "' + folder + '",' +
							'layout: "style-guide"' +
						'} %}' +
					'{% endblock %}';

				if (folder === 'feature') {
					result += '{% block page_feature %}';
				} else if (folder === 'full-width') {
					result += '{% block full_width_callouts %}';
				} else if (folder === 'in-content') {
					result += '{% block in_content_callouts %}';
				} else if (folder === 'sidebar') {
					result += '{% block sidebar %}';
				} else if (folder == 'default') {
					result += '{% block full-width %}';
				}

				mods.forEach(function(mod) {
					var content = fs.readFileSync(base + '/' + folder + '/' + mod, 'utf8');
					var str = content.match(/({#)+[^]+(#})+/);

					if(str) {
						str[0] = str[0].replace('{#', '');
						str[0] = str[0].replace('#}', '');
						result += str[0];
					}
				});

				result += '{% endblock %}';

				fs.writeFileSync('src/twig/templates/dev-' + folder + '.twig', result);
			});
		});
	});

	done();

});


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
		.pipe(gulp.dest('static/templates'))
		.pipe(browserSync.stream());

});


gulp.task('pretty-html', function() {

	return gulp.src(source.templates)
		.pipe(htmlbeautify({
			"indent_size": 1,
			"indent_char": "	",
			"preserve_newlines": false
		}))
		.pipe(gulp.dest('static/templates'));

});


gulp.task('create-sitemap', function() {

	return gulp.src(source.templates)
		.pipe(directoryMap({
			extension: '.html',
			filename: 'sitemap.json',
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('create-accessibility-sitemap', function() {

	return gulp.src(source.accessibility)
		.pipe(directoryMap({
			extension: '.html',
			filename: 'accessibility-sitemap.json',
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('sitemap', function() {

	return gulp.src(source.sitemap)
		.pipe(twig({
			data: {
				name: packageJSON.vars.name,
				trello: packageJSON.vars.idBoardTrello,
				sitemap: require('./static/sitemap.json')
			}
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static/'));

});


gulp.task('accessibility-sitemap', function() {

	return gulp.src(source.sitemap)
		.pipe(twig({
			data: {
				name: packageJSON.vars.name,
				sitemap: require('./static/accessibility-sitemap.json'),
				accessibility: true
			}
		}))
		.pipe(rename({
			basename: 'accessibility',
			extname: '.html'
		}))
		.pipe(gulp.dest('static/templates'));

});


gulp.task('sass', function() {

	return gulp.src(packageJSON.css)
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
		.pipe(gulpif(argv.production, cssnano()))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());

});


gulp.task('js', function() {

	return concat(packageJSON.js)
		.pipe(gulpif(argv.production, uglify()))
		.pipe(gulp.dest('js'))
		.pipe(browserSync.stream());

});


gulp.task('jshint', function() {

	return gulp.src(source.jshint, {
		since: gulp.lastRun('jshint')
	})
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));

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


gulp.task('accessibility-test', function(done) {

	if (!fs.existsSync('static/accessibility')) {
		fs.mkdirSync('static/accessibility');
	}

	var urls = globby.sync(source.accessibility);

	var queue = async.queue(function(url, complete) {
		var absolutePath = path.resolve(url);
		var base = path.basename(url, '.html');

		pa11y('file://' + absolutePath, {
			ignore: [
				'notice',
				'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs',
				'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs',
				'WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2',
				'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage',
				'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage',
				'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder'
			]
		}, function(error, results) {
			if (error) return console.error(error.message);

			console.log("scanning " + base + ".html");

			var errors = 0;
			var warnings = 0;

			for(issue in results.issues) {
				if(results.issues[issue].type == "error") {
					errors++;
				} else if(results.issues[issue].type == "warning") {
					warnings++;
				}

				results.issues[issue].context = results.issues[issue].context.replace(/(\s\s+)/g, '');
			}

			gulp.src('src/twig/templates/_accessibility.twig')
				.pipe(twig({
					data: {
						vars: packageJSON.vars,
						page: base,
						errors: errors,
						warnings: warnings,
						results: results
					}
				}))
				.pipe(rename({
					basename: base,
					extname: '.html'
				}))
				.pipe(gulp.dest('static/accessibility'));

			complete();
		});

	}, 2);

	queue.drain = function() {
		console.log('All done running gulp access!');
	};

	queue.push(urls);

	done();

});


gulp.task('clean', function(done) {

	del('css');
	del('favicons');
	del('images');
	del('js');
	del('reports');
	del('static');

	del('src/twig/templates/dev-feature.twig');
	del('src/twig/templates/dev-full-width.twig');
	del('src/twig/templates/dev-in-content.twig');
	del('src/twig/templates/dev-sidebar.twig');

	done();

});


gulp.task('browser-sync', function(done) {

	browserSync.init({
		logPrefix: packageJSON.vars.name,
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
	gulp.watch(watch.trello, gulp.series('twig', 'trello', 'reload'));
	gulp.watch(watch.twig, gulp.series('twig'));
	gulp.watch(watch.sass, gulp.series('sass'));
	gulp.watch(watch.js, gulp.series(gulp.parallel('js', 'jshint')));
	gulp.watch(watch.sprite, gulp.series('sprite', 'twig', 'reload'));
	gulp.watch(watch.images, gulp.series('imagemin', 'reload'));

});


gulp.task('build', gulp.parallel(
	'readme',
	'sass',
	gulp.series(
		'sprite',
		'twig',
		'trello',
		'create-sitemap',
		'sitemap',
		'pretty-html'
	),
	gulp.series(
		'js',
		'jshint'
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


gulp.task('dev', gulp.parallel(
	'watch',
	'browser-sync'
));


gulp.task('style-guide', gulp.series(
	'components',
	'trello'
));


gulp.task('access', gulp.series(
	'accessibility-test',
	'create-accessibility-sitemap',
	'accessibility-sitemap',
	gulp.series(
		'create-sitemap',
		'sitemap'
	),
	gulp.parallel(
		'watch',
		'browser-sync'
	)
));
