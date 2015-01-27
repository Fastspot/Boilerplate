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
					'autoprefixer:target',
					'newer:stripmq:target'
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
						'WWW_ROOT' : true
					},
					'-W003':   true, // used before defined
					devel:     true, // allow console
					browser:   true,
					curly:     true,
					eqeqeq:    true,
					forin:     true,
					freeze:    true,
					immed:     true,
					latedef:   true,
					newcap:    true,
					noarg:     true,
					nonew:     true,
					smarttabs: true,
					sub:       true,
					undef:     true,
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
		// LESS
		less: {
			target: {
				options: {
					report: 'min',
					cleancss: true,
					modifyVars: '<%= pkg.vars %>',
					banner: '<%= meta.banner %>',
					compress: true
				},
				files: '<%= pkg.css %>'
			}
		},
		// Vendor prefixes
		autoprefixer: {
			target: {
				options: {
					browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 8']
				},
				src: 'css/*.css'
			},
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
	grunt.registerTask('default', [ 'css', 'js' ]);

	// CSS
	grunt.registerTask('css', [ 'less', 'autoprefixer', 'stripmq' ]);

	// JS
	grunt.registerTask('js', [ 'jshint', 'uglify', 'includereplace', 'modernizr' ]);

};
