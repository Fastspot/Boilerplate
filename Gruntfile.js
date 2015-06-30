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
				files: [
					'js/src/**/**.js'
				],
				tasks: [
					'newer:jshint:target',
					'newer:concat:target',
					'newer:includereplace:target'
				]
			},
			styles: {
				files: [
					'css/src/**/**.{less,css}'
				],
				tasks: [
					'newer:less:target',
					'postcss:target',
					'newer:stripmq:target'
				]
			},
			images: {
				files: [
					'images/src/**/*.{png,jpg,jpeg,gif,svg}'
				],
				tasks: [
					'newer:imagemin:target',
					'newer:svgmin:target'
				]
			},
			static: {
				files: [
					'static/src/**/**.html'
				],
				tasks: [
					'includereplace:static'
				]
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
				src: [
					'js/src/**/**.js'
				],
				options: {
					ignores: '<%= pkg.js_ignores %>',
					globals: {
						'jQuery'   : true,
						'$'        : true,
						'WWW_ROOT' : true,
						'Site'     : true,
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
					validthis: true,
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
				dest: 'static',
				src: '*.html',
				expand: true,
				cwd: 'static/src'
			}
		},
		// LESS
		less: {
			options: {
				compress: true,
				modifyVars: '<%= pkg.vars %>',
				banner: '<%= meta.banner %>',
				plugins: [
					new (require('less-plugin-clean-css'))()
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
				files: '<%= pkg.css %>'
			}
		},
		// Vendor prefixes
		postcss: {
			options: {
				processors: [
					require('autoprefixer-core')({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 9']})
				]
			},
			target: {
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
					'css/site-ie8.css': [ 'css/site-ie8.css' ]
				}
			}
		},
		// Custom Modernizr build
		modernizr: {
			target: {
				devFile: 'components/modernizr/modernizr.js',
				outputFile: 'js/modernizr.js',
				"extra" : {
					"shiv" : false,
					"printshiv" : false,
					"load" : true,
					"mq" : false,
					"cssclasses" : true
				},
				files: {
					src: [
						'js/*.js',
						'css/*.css'
					]
				}
			}
		},
		// Optimize images (png, gif, jpg)
		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: 'images/src',
					src: '**/*.{png,jpg,jpeg,gif}',
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
		// HTML validation
		validation: {
			options: {
				reset: true,
				path: "reports/validation-status.json",
				reportpath: "reports/validation-report.json"
			},
			target: {
				src: [
					'static/*.html'
				]
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
				src: 'static/*.html'
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
						'**/*.html'
					]
				},
				options: {
					proxy : "localhost:8888",
					watchTask: true,
					open: false
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
	grunt.registerTask('default', [ 'less:production', 'postcss', 'js', 'img', 'html' ]);

	// CSS
	grunt.registerTask('css', [ 'less:target', 'postcss', 'stripmq' ]);

	// JS
	grunt.registerTask('js', [ 'jshint', 'uglify', 'includereplace:target', 'modernizr' ]);

	// Images
	grunt.registerTask('img', [ 'imagemin', 'svgmin' ]);

	// HTML
	grunt.registerTask('html', [ 'includereplace:static', 'prettify' ]);

	// Develop
	grunt.registerTask('devel', ['browserSync', 'watch']);

};
