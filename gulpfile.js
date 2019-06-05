const { src, dest, lastRun, series, parallel, watch } = require('gulp');
const reload = require('require-reload')(require);
const async = require('async');
const fs = require('fs');
const path = require('path');
const globby = require('globby');
const packageJSON = require('./package.json');
const trelloKeyToken = require('trello-module');
const browserSync = require('browser-sync').create();
const del = require('del');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const newer = require('gulp-newer');
const twig = require('gulp-twig');
const htmlbeautify = require('gulp-html-beautify');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat-multi');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const realFavicon = require ('gulp-real-favicon');
const FAVICON_DATA_FILE = 'favicons/markup.json';
const axe = require('gulp-axe-webdriver');
const pa11y = require('pa11y');


var source = {
	readme: 'src/twig/README.twig',
	trello: [
		'src/twig/templates/fs-components.twig',
		'src/twig/templates/fs-templates.twig'
	],
	twig: [
		'src/twig/templates/*.twig',
		'!src/twig/templates/_*.twig',
		'!src/twig/templates/fs-component-image-crops.twig',
		'!src/twig/templates/fs-image-crops.twig',
		'!src/twig/templates/fs-components.twig',
		'!src/twig/templates/fs-templates.twig'
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


function trello(done) {
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

							cards.push(data[card]);
						} else if(data[card].labels.find(findTemplate)) {
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

				src(source.trello)
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
					.pipe(dest('static/templates'));
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
}


function readme() {
	return src(source.readme)
		.pipe(twig({
			data: packageJSON
		}))
		.pipe(rename({
			extname: '.md'
		}))
		.pipe(dest('./'));
}


function compileTwig() {
	return src(source.twig)
		.pipe(twig({
			data: packageJSON,
			cache: true
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(dest('static/templates'))
		.pipe(browserSync.stream());
}


function prettyhtml() {
	return src(source.templates)
		.pipe(htmlbeautify({
			"indent_size": 1,
			"indent_char": "	",
			"preserve_newlines": false
		}))
		.pipe(dest('static/templates'));
}


function sitemap(done) {
	var base = "static/templates";
	var sitemap = [];
	var steps = 1;

	fs.readdir(base, function(err, files) {
		fileCount = files.toString().match(/page/g).length;

		files.forEach(function(file) {
			if (!(file.indexOf("_") > -1)) {
				fs.readFile(base + '/' + file, 'utf8', function(err, contents) {
					sitemap.push({
						name: file,
						contents: contents
					});

					steps++;

					if (steps == fileCount) {
						src(source.sitemap)
							.pipe(twig({
								data: {
									name: packageJSON.vars.name,
									trello: packageJSON.vars.idBoardTrello,
									filters: packageJSON.vars.filters,
									sitemap: sitemap
								}
							}))
							.pipe(rename({
								extname: '.html'
							}))
							.pipe(dest('static/'));
					}
				});
			}
		});
	});

	done();
}


function compileSass() {
	return src(packageJSON.css)
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
		.pipe(dest('css'))
		.pipe(browserSync.stream());
}


function compileJs() {
	return concat(packageJSON.js)
		.pipe(gulpif(argv.production, uglify()))
		.pipe(dest('js'))
		.pipe(browserSync.stream());
}


function hintJs() {
	return src(source.jshint, {
		since: lastRun(hintJs)
	})
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
}


function sprite() {
	return src(source.sprite)
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
		.pipe(dest('.'));
}


function compressImages() {
	return src(source.images)
		.pipe(newer('images'))
		.pipe(imagemin())
		.pipe(dest('images'));
}


function imageCrops(done) {
	var base = 'static/templates';
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

						src('src/twig/templates/fs-image-crops.twig')
							.pipe(twig({
								data: {
									crops: modCrops
								}
							}))
							.pipe(rename({
								extname: '.html'
							}))
							.pipe(dest('static/templates'));
					}
				});
			}
		});
	});

	done();
}


function componentImageCrops(done) {
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
					src('src/twig/templates/fs-component-image-crops.twig')
						.pipe(twig({
							data: {
								sections: data
							}
						}))
						.pipe(rename({
							extname: '.html'
						}))
						.pipe(dest('static/templates'));
				}
			});
		});
	});

	done();
}


function generateFavicon(done) {
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
}


function injectFaviconMarkups() {
	return src(['src/twig/partials/favicons.html' ])
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(dest('src/twig/partials/'));
}


function checkForFaviconUpdate(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;

	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});

	done();
}


function runAxe() {
  var options = {
		folderOutputReport: 'static/',
		headless: true,
		saveOutputIn: 'axe.json',
		showOnlyViolations: true,
    urls: source.accessibility
	};

	return axe(options);
}


function axePage() {
	return src('src/twig/templates/_axe.twig')
		.pipe(twig({
			data: {
				vars: packageJSON.vars,
				items: require('./static/axe.json')
			}
		}))
		.pipe(rename({
			basename: "axe",
			extname: '.html'
		}))
		.pipe(dest('static/templates'));
}


function runPa11y(done) {
	if (!fs.existsSync('static/pa11y')) {
		fs.mkdirSync('static/pa11y');
	}

	var urls = globby.sync(source.accessibility);
	var items = [];

	var queue = async.queue(function(url, complete) {
		var absolutePath = path.resolve(url);
		var base = path.basename(url, '.html');

		pa11y('file://' + absolutePath, {
			ignore: [
				'notice'
			]
		}, function(error, results) {
			if (error) return console.error(error.message);

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

			items.push({
				page: base,
				errors: errors,
				warnings: warnings,
				results: results
			});

			complete();
		});

	}, 2);

	queue.drain = function() {
		src('src/twig/templates/_pa11y.twig')
			.pipe(twig({
				data: {
					vars: packageJSON.vars,
					items: items
				}
			}))
			.pipe(rename({
				basename: 'pa11y',
				extname: '.html'
			}))
			.pipe(dest('static/templates'));

		console.log('All done! All pa11y links should be functional now!');
	};

	queue.push(urls);

	done();
}


function clean(done) {
	del('css');
	del('favicons');
	del('images');
	del('js');
	del('static-html');
	done();
}


function runBrowserSync(done) {
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
}


function reloadSystem(done) {
	browserSync.reload();

	done();
}


function resetPackage(done) {
	try {
		packageJSON = reload('./package.json');
	} catch (e) {
		console.error('Failed to reload package.json! Error: ', e);
	}

	done();
}


function watchFileSystem(done) {
	watch('package.json', series(
		resetPackage,
		compileTwig,
		reloadSystem
	));

	watch([
		'src/twig/**/*.twig',
		'!src/twig/templates/fs-component-image-crops.twig',
		'!src/twig/templates/fs-image-crops.twig',
		'!src/twig/templates/fs-components.twig',
		'!src/twig/templates/fs-templates.twig',
		'!src/twig/partials/guidebook/trello-details.twig',
		'!src/twig/partials/guidebook/trello-sections.twig',
		'!src/twig/partials/guidebook/trello-js.twig'
	], series(
		compileTwig
	));

	watch('src/css/**/**', series(
		compileSass
	));

	watch('src/js/**/*.js', series(
		compileJs,
		hintJs
	));

	watch('src/icons/*', series(
		sprite,
		compileTwig,
		reloadSystem
	));

	watch('src/images/*', series(
		imagemin,
		reloadSystem
	));

	done();
}


exports.compileSass = compileSass;
exports.compileJs = compileJs;
exports.compileTwig = compileTwig;
exports.imageCrops = imageCrops;
exports.componentImageCrops = componentImageCrops;
exports.clean = clean;

exports.build = parallel(
	readme,
	compileSass,
	compileJs,
	compressImages,
	series(
		sprite,
		compileTwig,
		prettyhtml,
		sitemap,
	)
);


exports.dev = parallel(
	watchFileSystem,
	runBrowserSync
);


exports.default = series(
	readme,
	compileSass,
	sprite,
	compileTwig,
	sitemap,
	compileJs,
	compressImages,
	watchFileSystem,
	runBrowserSync
);


exports.styleGuide = series(
	trello,
	compileTwig
);


exports.access = series(
	runAxe,
	axePage,
	runPa11y,
	watchFileSystem,
	runBrowserSync
);