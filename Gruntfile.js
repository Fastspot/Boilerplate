/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! \n' +
				' * <%= pkg.name %> v<%= pkg.version %> [<%= grunt.template.today("yyyy-mm-dd") %>] \n' +
				' * <%= pkg.description %> \n' +
				' * <%= pkg.author %> \n' +
				' */ \n\n'
		},
		// Watcher
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: 'js/src/**/**.js',
				tasks: [
					'newer:jshint:target',
					'newer:concat:target',
					'newer:includereplace:target'
				]
			},
			styles: {
				files: 'css/src/**/**.{less,css}',
				tasks: [
					'newer:less:target',
					'postcss:target',
					'newer:stripmq:target'
				]
			},
			images: {
				files: 'images/src/**/*.{png,jpg,jpeg,gif,svg,ico}',
				tasks: [
					'newer:imagemin:target',
					'newer:svgmin:target'
				]
			},
			static: {
				files: 'static/src/**/**.html',
				tasks: 'includereplace:static'
			},
			prettify: {
				files: 'static/src/**/**.html',
				tasks: 'prettify:target'
			},
			config: {
				files: [
					'Gruntfile.js',
					'package.json'
				],
				options: {
					reload: true
				}
			}
		},
		// Newer
		newer: {
			options: {
				override: function(details, include) {
					if (details.task === 'less') {
						checkForNewerImports(details.path, details.time, include);
					} else {
						include(false);
					}
				}
			}
		},
		// JS Hint
		jshint: {
			target: {
				src: 'js/src/**/**.js',
				options: {
					ignores: '<%= pkg.js_ignores %>',
					globals: {
						'jQuery'   : true,
						'$'        : true,
						'WWW_ROOT' : true,
						'Site'     : true
					},
					'-W003':   true, // used before defined
					devel:     true, // allow console
					browser:   true,
					curly:     true,
					eqeqeq:    true,
					forin:     true,
					freeze:    true,
					immed:     true,
					jquery:    true,
					latedef:   true,
					newcap:    true,
					noarg:     true,
					nonew:     true,
					smarttabs: true,
					sub:       true,
					undef:     true,
					unused:    false,
					validthis: true
				}
			},
			production: {
				src: 'js/src/**/**.js',
				options: {
					ignores: '<%= pkg.js_ignores %>',
					globals: {
						'jQuery'   : true,
						'$'        : true,
						'WWW_ROOT' : true,
						'Site'     : true
					},
					'-W003':   true, // used before defined
					devel:     true, // allow console
					browser:   true,
					curly:     true,
					eqeqeq:    true,
					forin:     true,
					freeze:    true,
					immed:     true,
					jquery:    true,
					latedef:   true,
					newcap:    true,
					noarg:     true,
					nonew:     true,
					smarttabs: true,
					sub:       true,
					undef:     true,
					unused:    true,
					validthis: true
				}
			}
		},
		// Uglify - For production
		uglify: {
			options: {
				banner: '<%= meta.banner %>',
				report: 'min',
				sourceMap: true
			},
			target: {
				files: '<%= pkg.js %>'
			}
		},
		// Concat - For development
		concat: {
			options: {
				sourceMap: true
			},
			target: {
				files: '<%= pkg.js %>'
			}
		},
		// Replace
		includereplace: {
			target: {
				options: {
					prefix: '@',
					globals: '<%= pkg.vars %>'
				},
				dest: 'js/',
				src: '*.js',
				expand: true,
				cwd: 'js/'
			},
			static: {
				options: {
					globals: '<%= pkg.vars %>'
				},
				dest: 'static',
				src: [
					"*.html",
					"templates/*.html"
				],
				expand: true,
				cwd: 'static/src'
			}
		},
		// LESS
		less: {
			options: {
				modifyVars: '<%= pkg.vars %>',
				banner: '<%= meta.banner %>'
			},
			target: {
				options: {
					sourceMapFileInline: true,
					sourceMap: true
				},
				files: '<%= pkg.css %>'
			},
			production: {
				options: {
					compress: true,
					plugins: new (require('less-plugin-clean-css'))()
				},
				files: '<%= pkg.css %>'
			}
		},
		// Vendor prefixes
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 8']})
				]
			},
			target: {
				options: {
					map: true
				},
				src: 'css/*.css'
			},
			production: {
				src: 'css/*.css'
			}
		},
		// Strip MQ
		stripmq: {
			options: {
				width: 1024,
				type: 'screen'
			},
			target: {
				files: {
					'css/site-ie8.css': 'css/site-ie8.css'
				}
			}
		},
		// Custom Modernizr build
		modernizr: {
			dist: {
				devFile: false,
				"dest": 'js/modernizr.js',
				"options" : [
					"load",
					"setClasses",
					"testProp",
					"fnBind"
				],
				files: {
					src: [
						'js/*.js',
						'css/*.css'
					]
				}
			}
		},
		// Optimize images (png, gif, jpg, ico)
		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: 'images/src',
					src: '**/*.{png,jpg,jpeg,gif,ico}',
					dest: 'images'
				}]
			}
		},
		// Optimize images (svg)
		svgmin: {
			options: {
				plugins: [{
					removeViewBox: true
				}]
			},
			target: {
				files: [{
					expand: true,
					cwd: 'images/src',
					src: '**/*.svg',
					dest: 'images'
				}]
			}
		},
		// Bless CSS
		bless: {
			target: {
				options: {
					compress: true,
					cacheBuster: false,
					logCount: true
				},
				files: {
					'css/site-ie.css': 'css/site.css'
				}
			}
		},
		// HTML formatting
		prettify: {
			options: {
				condense: false,
				indent: 1,
				indent_char: '	',
				preserve_newlines: true,
				max_preserve_newlines: 4,
				unformatted: ["code", "pre"]
			},
			target: {
				expand: true,
				src: [
					"static/*.html",
					"static/templates/*.html"
				]
			}
		},
		// Remove any previously-created files
		clean: {
			js: [
				"js/*",
				"!js/src/**",
			],
			css: [
				"css/*",
				"!css/src/**",
			],
			html: [
				"static/*",
				"!static/src/**",
			]
		},
		// Create directory listing
		includeSource: {
			options: {
				basePath: 'static/templates',
				baseUrl: '',
				templates: {
					html: {
						link: '<li><a href="templates/{filePath}">{filePath}</a></li>'
					}
				}
			},
			target: {
				files: {
					'static/index.html': 'static/index.tpl.html'
				}
			}
		},
		// Browsersync auto refresh
		browserSync: {
			target: {
				bsFiles: {
					src : [
						'js/**.js',
						'css/**.css',
						'images/*',
						'static/**/**.html'
					]
				},
				options: {
					server: {
						baseDir: "./"
					},
					watchTask: true,
					open: false
				}
			}
		},
		// Favicons - http://realfavicongenerator.net/favicon/grunt
		realFavicon: {
			favicons: {
				src: 'images/favicon.png',
				dest: 'images/favicons/',
				options: {
					iconsPath: '/images/favicons/',
					html: [ 'static/src/partials/_favicons.html' ],
					design: {
						ios: {
							pictureAspect: 'noChange'
						},
						desktopBrowser: {},
						windows: {
							pictureAspect: 'noChange',
							backgroundColor: '<%= pkg.vars.color %>',
							onConflict: 'override'
						},
						androidChrome: {
							pictureAspect: 'noChange',
							themeColor: '<%= pkg.vars.color %>',
							manifest: {
								name: '<%= pkg.description %>',
								display: 'browser',
								orientation: 'notSet',
								onConflict: 'override',
								declared: true
							}
						},
						safariPinnedTab: {
							pictureAspect: 'blackAndWhite',
							threshold: 75,
							themeColor: '<%= pkg.vars.color %>'
						}
					},
					settings: {
						scalingAlgorithm: 'Mitchell',
						errorOnImageTooSmall: false
					},
					versioning: {
						paramName: 'v',
						paramValue: '<%= pkg.version %>'
					}
				}
			}
		}
	});

	// Newer LESS Imports
	function checkForNewerImports(lessFile, mTime, include) {
		var fs = require('fs'),
			path = require('path');

		fs.readFile(lessFile, "utf8", function(err, data) {
			var lessDir = path.dirname(lessFile),
				regex = /@import "(.+?)(\.less)?";/g,
				shouldInclude = false,
				match;

			while ((match = regex.exec(data)) !== null) {
				var importFile = lessDir + '/' + match[1] + '.less';
				if (fs.existsSync(importFile)) {
					var stat = fs.statSync(importFile);
					if (stat.mtime > mTime) {
						shouldInclude = true;
						break;
					}
				}
			}

			include(shouldInclude);
		});
	}

	// Default task
	grunt.registerTask('default', 'build');

	// Build
	grunt.registerTask('build', [ 'clean', 'less:production', 'postcss:production', 'stripmq', 'bless', 'js', 'img', 'html' ]);

	// CSS
	grunt.registerTask('css', [ 'less:target', 'postcss:target', 'stripmq', 'bless' ]);

	// JS
	grunt.registerTask('js', [ 'jshint:production', 'uglify', 'includereplace:target', 'modernizr' ]);

	// Images
	grunt.registerTask('img', [ 'imagemin', 'svgmin' ]);

	// HTML
	grunt.registerTask('html', [ 'includereplace:static', 'prettify', 'includeSource' ]);

	// Develop
	grunt.registerTask('devel', ['build', 'browserSync', 'watch']);

	// Debug (expanded files)
	grunt.registerTask('debug', [ 'clean', 'less:target', 'postcss:target', 'stripmq', 'jshint', 'concat', 'includereplace:target', 'img', 'html' ]);

};
