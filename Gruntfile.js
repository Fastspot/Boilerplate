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
					'less:target',
					'postcss:target',
					'stripmq:target'
				]
			},
			images: {
				files: 'images/src/**/*',
				tasks: [
					'newer:imagemin:target'
				]
			},
			static: {
				files: 'static/src/**/**.twig',
				tasks: 'twigRender'
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
						'jQuery'	 : true,
						'$'				: true,
						'WWW_ROOT' : true,
						'Site'		 : true
					},
					'-W003':	 true, // used before defined
					devel:		 true, // allow console
					browser:	 true,
					curly:		 true,
					eqeqeq:		true,
					forin:		 true,
					freeze:		true,
					immed:		 true,
					jquery:		true,
					latedef:	 true,
					newcap:		true,
					noarg:		 true,
					nonew:		 true,
					smarttabs: true,
					sub:			 true,
					undef:		 true,
					unused:		false,
					validthis: true
				}
			},
			production: {
				src: 'js/src/**/**.js',
				options: {
					ignores: '<%= pkg.js_ignores %>',
					globals: {
						'jQuery'	 : true,
						'$'				: true,
						'WWW_ROOT' : true,
						'Site'		 : true
					},
					'-W003':	 true, // used before defined
					devel:		 true, // allow console
					browser:	 true,
					curly:		 true,
					eqeqeq:		true,
					forin:		 true,
					freeze:		true,
					immed:		 true,
					jquery:		true,
					latedef:	 true,
					newcap:		true,
					noarg:		 true,
					nonew:		 true,
					smarttabs: true,
					sub:			 true,
					undef:		 true,
					unused:		true,
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
			}
		},
		// Twig
		twigRender: {
			your_target: {
	      files: [
	        {
	          data: '<%= pkg.vars %>',
	          expand: true,
	          cwd: 'static/src/templates/',
	          src: ['*.twig', '!_*.twig'],
	          dest: 'static/templates/',
	          ext: '.html'
	        }
	      ]
	    },
	  },
		// LESS
		less: {
			options: {
				modifyVars: '<%= pkg.vars %>',
				banner: '<%= meta.banner %>',
				plugins: [
					new (require('less-plugin-clean-css'))(),
					require('less-plugin-glob')
				]
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
					compress: true
				},
				files: '<%= pkg.css %>'
			}
		},
		// Vendor prefixes
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 8']}),
					require('postcss-assets')({
						cachebuster: true,
						baseUrl: '..'
					})
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
				'dest': 'js/modernizr.js',
				'options' : [
					'load',
					'setClasses',
					'testProp',
					'fnBind'
				],
				files: {
					src: [
						'js/*.js',
						'css/*.css'
					]
				}
			}
		},
		// Optimize images
		imagemin: {
			options: {
<<<<<<< HEAD
				svgoPlugins: [{
					removeViewBox: true
				}]
=======
				svgoPlugins: [{ removeViewBox: true }]
>>>>>>> f3803dfd0be8d5e7a74e707ee6a38a5d82e4d5b7
			},
			target: {
				files: [{
					expand: true,
					cwd: 'images/src',
					src: [
						'**/*',
						'!icons/**'
					],
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
		// Remove any previously-created files
		clean: {
			js: [
				'js/*',
				'!js/src/**'
			],
			css: [
				'css/*',
				'!css/src/**'
			],
			html: [
				'static/templates',
				'!static/src/**'
			],
			img: [
				'images/*',
				'!images/src/**'
			],
			sprite: [
				'css/src/imports/icons.less',
				'images/src/icons.*'
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
						baseDir: './'
					},
					watchTask: true,
					open: false,
					notify: {
						styles: {
							top: 'auto',
							bottom: '0',
							borderBottomLeftRadius: '0',
							fontSize: '11px',
							padding: '5px 10px'
						}
					}
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
		},
		// SVG sprite file creation
		svg_sprite: {
			target: {
				expand: true,
				cwd: 'images/src/icons',
				src: ['**/*.svg'],
				dest: 'images/src',
				options: {
					'dest': 'images/',
					'svg': {
						'xmlDeclaration': false,
						'doctypeDeclaration': false
					},
					'mode': {
						'css': {
							'common': 'sprite',
							'prefix': '.icon_%s',
							'dimensions': '_dims',
							'sprite': '../src/icons.svg',
							'bust': false,
							'render': {
								'less': {
									'dest': '../../css/src/imports/icons.less'
								}
							},
							'example': {
									'dest': '../icons.html'
							}
						}
					}
				}
			}
		}
	});

	// Newer LESS Imports
	function checkForNewerImports(lessFile, mTime, include) {
		var fs = require('fs'),
			path = require('path');

		fs.readFile(lessFile, 'utf8', function(err, data) {
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
	grunt.registerTask('build', [ 'clean', 'img', 'less:production', 'postcss:production', 'stripmq', 'bless', 'js', 'html' ]);

	// CSS
	grunt.registerTask('css', [ 'less:target', 'postcss:target', 'stripmq', 'bless' ]);

	// JS
	grunt.registerTask('js', [ 'jshint:production', 'uglify', 'includereplace:target', 'modernizr' ]);

	// Images
<<<<<<< HEAD
	grunt.registerTask('img', [ 'svg_sprite', 'imagemin', ]);
=======
	grunt.registerTask('img', [ 'svg_sprite', 'imagemin' ]);
>>>>>>> f3803dfd0be8d5e7a74e707ee6a38a5d82e4d5b7

	// HTML
	grunt.registerTask('html', [ 'twigRender', 'includeSource' ]);

	// Develop
	grunt.registerTask('devel', ['build', 'browserSync', 'watch']);

	// Debug (expanded files)
	grunt.registerTask('debug', [ 'clean', 'img', 'less:target', 'postcss:target', 'stripmq', 'jshint', 'concat', 'includereplace:target', 'html' ]);

};
