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
		markdown = require('markdown').markdown;


var source = {
	readme: 'src/twig/README.twig',
	trello: [
		'src/twig/templates/fs-components.twig',
		'src/twig/templates/fs-templates.twig'
	],
	twig: [
		'src/twig/templates/*.twig',
		'!src/twig/templates/_*.twig',
		'!src/twig/templates/dev-component-image-crops.twig',
		'!src/twig/templates/dev-image-crops.twig',
		'!src/twig/templates/fs-components.twig',
		'!src/twig/templates/fs-templates.twig'
	],
	templates: 'static-html/templates/*.html',
	accessibility: [
		'static-html/templates/page*.html',
		'!static-html/templates/page-form-builder.html',
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
		'src/twig/partials/guidebook/trello-details.twig',
		'src/twig/partials/guidebook/trello-sections.twig',
		'src/twig/partials/guidebook/trello-js.twig'
	],
	twig: [
		'src/twig/**/*.twig',
		'!src/twig/templates/dev-component-image-crops.twig',
		'!src/twig/templates/dev-image-crops.twig',
		'!src/twig/templates/fs-components.twig',
		'!src/twig/templates/fs-templates.twig',
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
	var Trello = require('node-trello');
	var trello = new Trello(trelloKeyToken.key(), trelloKeyToken.token());

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
							templates: templates
						}
					}))
					.pipe(rename({
						extname: '.html'
					}))
					.pipe(gulp.dest('static-html/templates'));
			}
		});

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
		.pipe(gulp.dest('static-html/templates'))
		.pipe(browserSync.stream());

});


gulp.task('pretty-html', function() {

	return gulp.src(source.templates)
		.pipe(htmlbeautify({
			"indent_size": 1,
			"indent_char": "	",
			"preserve_newlines": false
		}))
		.pipe(gulp.dest('static-html/templates'));

});


gulp.task('create-sitemap', function() {

	return gulp.src(source.templates)
		.pipe(directoryMap({
			extension: '.html',
			filename: 'sitemap.json',
		}))
		.pipe(gulp.dest('static-html/'));

});


gulp.task('create-accessibility-sitemap', function() {

	return gulp.src(source.accessibility)
		.pipe(directoryMap({
			extension: '.html',
			filename: 'accessibility-sitemap.json',
		}))
		.pipe(gulp.dest('static-html/'));

});


gulp.task('sitemap', function() {

	return gulp.src(source.sitemap)
		.pipe(twig({
			data: {
				name: packageJSON.vars.name,
				trello: packageJSON.vars.idBoardTrello,
				sitemap: require('./static-html/sitemap.json')
			}
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('static-html/'));

});


gulp.task('accessibility-sitemap', function() {

	return gulp.src(source.sitemap)
		.pipe(twig({
			data: {
				name: packageJSON.vars.name,
				sitemap: require('./static-html/accessibility-sitemap.json'),
				accessibility: true
			}
		}))
		.pipe(rename({
			basename: 'accessibility',
			extname: '.html'
		}))
		.pipe(gulp.dest('static-html/templates'));

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


gulp.task('image-crops', function(done) {

	var base = 'static-html/templates';
	var exclude = ["16x16", "32x32", "144x144", "180x180"];
	var crops = [];
	var modCrops = [];
	var steps = 1;
	var fileCount;

	fs.readdir(base, function(err, files) {
		fileCount = files.toString().match(/page/g).length;

		files.forEach(function(file) {
			if (file.indexOf("page") > -1) {
				fs.readFile(base + '/' + file, 'utf8', function(err, contents) {
					var sizes = contents.match(/\d+x\d+/g);

					for (var x = 0; x < sizes.length; x++) {

						if (crops.indexOf(sizes[x]) == -1) {
							if (exclude.indexOf(sizes[x]) == -1) {
								crops.push(sizes[x]);
							}
						}
					}

					steps++;

					if (steps == fileCount) {
						crops = crops.sort();

						for (var x = 0; x < crops.length; x++) {
							for (var cropRatio in packageJSON.img) {
								for (var cropSize in packageJSON.img[cropRatio]) {
									if (packageJSON.img[cropRatio][cropSize] == crops[x]) {
										modCrops.push('<span class="crop-size">' + crops[x] + '</span><span class="crop-name"> ' + cropRatio + '.' + cropSize + '</span>');
									}
								}
							}
						}

						gulp.src('src/twig/templates/dev-image-crops.twig')
							.pipe(twig({
								data: {
									crops: modCrops
								}
							}))
							.pipe(rename({
								extname: '.html'
							}))
							.pipe(gulp.dest('static-html/templates'));
					}
				});
			}
		});
	});

	done();

});


gulp.task('component-image-crops', function(done) {

	var base = 'src/twig/components';
	var data = [];
	var typeSteps = 1;

	fs.readdir(base, function(err, folders) {
		folders.forEach(function(folder) {
			fs.readdir(base + '/' + folder, function(err, mods) {
				var type = folder.replace('-', ' ').replace(/^[a-z]/, l => l.toUpperCase()).replace(/ [a-z]/, l => l.toUpperCase());

				data.push({
					type: type,
					items: []
				});

				mods.forEach(function(mod) {
					var content = fs.readFileSync(base + '/' + folder + '/' + mod, 'utf8');
					var name = "";
					var sizes = content.match(/(img\.[a-z]*\.[a-z]*)/g);
					var sizesMarkup = [];

					if (/(site.anchor\(.*\))/.test(content)) {
						name = content.match(/(site.anchor\(.*\))/g);
						name = name[0].replace('site.anchor(', '').replace(')', '').replace(/"/g, '');
					} else {
						name = mod.replace(/(-)/g, ' ').replace('.twig', '').replace(/^[a-z]/, l => l.toUpperCase()).replace(/ [a-z]/g, l => l.toUpperCase());
					}

					if (sizes !== null) {
						sizes = [...new Set(sizes)];
						sizes = sizes.sort();

						for (var x = 0; x < sizes.length; x++) {
							for (var cropRatio in packageJSON.img) {
								for (var cropSize in packageJSON.img[cropRatio]) {
									if ('img.' + cropRatio + '.' + cropSize == sizes[x]) {
										sizesMarkup.push('<li class="crop" data-crop-size="' + packageJSON.img[cropRatio][cropSize] + '"><span class="crop-size">' + packageJSON.img[cropRatio][cropSize] + '</span><span class="crop-name"> ' + cropRatio + '.' + cropSize + '</span></li>');
									}
								}
							}
						}

						data[typeSteps - 1].items.push({
							name: name,
							sizes: sizesMarkup
						});
					}
				});

				typeSteps++;

				if (typeSteps == folders.length) {
					gulp.src('src/twig/templates/dev-component-image-crops.twig')
						.pipe(twig({
							data: {
								sections: data
							}
						}))
						.pipe(rename({
							extname: '.html'
						}))
						.pipe(gulp.dest('static-html/templates'));
				}
			});
		});
	});

	done();

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

	if (!fs.existsSync('static-html/accessibility')) {
		fs.mkdirSync('static-html/accessibility');
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

			console.log("Scanning " + base + ".html");

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
				.pipe(gulp.dest('static-html/accessibility'));

			complete();
		});

	}, 2);

	queue.drain = function() {
		console.log('All done! Check out your updated accessibility page.');
	};

	queue.push(urls);

	done();

});


gulp.task('clean', function(done) {

	del('css');
	del('favicons');
	del('images');
	del('js');
	del('static-html');

	done();

});


gulp.task('browser-sync', function(done) {

	browserSync.init({
		logPrefix: packageJSON.vars.name,
		ui: false,
		server: './',
		startPath: '/static-html/index.html',
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
	gulp.watch(watch.js, gulp.series('js', 'jshint'));
	gulp.watch(watch.sprite, gulp.series('sprite', 'twig', 'reload'));
	gulp.watch(watch.images, gulp.series('imagemin', 'reload'));

});


gulp.task('build', gulp.parallel(
	'readme',
	'sass',
	gulp.series(
		'sprite',
		'twig',
		'pretty-html',
		'create-sitemap',
		'sitemap',
		'js',
		'jshint'
	),
	'imagemin'
));


gulp.task('dev', gulp.parallel(
	'watch',
	'browser-sync'
));


gulp.task('default', gulp.series(
	'build',
	'dev'
));


gulp.task('style-guide', gulp.series(
	'trello',
	'twig'
));


gulp.task('access', gulp.series(
	'accessibility-test',
	'create-accessibility-sitemap',
	'accessibility-sitemap',
	gulp.series(
		'create-sitemap',
		'sitemap'
	),
	'dev'
));
