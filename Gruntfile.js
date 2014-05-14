/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! Mount Vernon */ \n'
		},
		// Watcher
		watch: {
			scripts: {
				files: [
					'js/src/**.js',
					'js/src/*/**.js'
				],
				tasks: [
					'newer:jshint:target',
					'newer:uglify:target:files',
					'newer:includereplace:target:files'
				]
			},
			styles: {
				files: [
					'css/src/**.css',
					'css/src/*/**.css',
					'css/src/**.less',
					'css/src/*/**.less'
				],
				tasks: [
					'newer:less:target:files'
				]
			},
			dev: {
				files: [
					'js/src/**.js',
					'js/src/*/**.js',

					'css/src/**.css',
					'css/src/*/**.css',
					'css/src/**.less',
					'css/src/*/**.less'
				],
				tasks: [
					'newer:jshint:target',
					'newer:concat:target:files',
					'newer:includereplace:target:files',

					'newer:less:target:files'
				]
			}
		},
		// JS Hint
		jshint: {
			target: {
				src: [
					'js/src/**.js',
					'js/src/*/**.js'
				],
				options: {
					ignores: [
						'js/src/map.js',
						'js/src/ie/EventListener.js',
						'js/src/ie/matchMedia.ie8.js',
						'js/src/ie/matchMedia.ie9.js',
						'js/src/lib/jquery-ui-datepicker.js',
						'js/src/lib/modernizr.custom.js',
						'js/src/lib/utils.js'
					],
					globals: {
						'jQuery'   : true,
						'$'        : true,
						'WWW_ROOT' : true
					},
					'-W003':   true, // used before defined
					browser:   true,
					curly:     true,
					eqeqeq:    true,
					forin:     true,
					freeze:    true,
					immed:	   true,
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
		// Uglify
		uglify: {
			options: {
				banner: '<%= meta.banner %>',
				report: 'min'
			},
			target: {
				files: '<%= pkg.js %>'
			}
		},
		// Concat
		concat: {
			target: {
				files: '<%= pkg.js %>'
			}
		},
		// LESS
		less: {
			target: {
				options: {
					banner: '<%= meta.banner %>',
					report: 'min',
					cleancss: false,
					modifyVars: '<%= pkg.vars %>'
				},
				files: '<%= pkg.css %>'
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
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-newer');

	// Default task
	grunt.registerTask('default', [ 'css', 'js' ]);

	// Watch
	grunt.registerTask('watcher', [ 'watch:scripts', 'watch:styles' ]);

	// CSS
	grunt.registerTask('css', [ 'less' ]);

	// JS
	grunt.registerTask('js', [ 'jshint', 'uglify', 'includereplace' ]);

	// Dev - Watch
	grunt.registerTask('dev', [ 'watch:dev' ]);

	// Dev - JS
	grunt.registerTask('dev_js', [ 'jshint', 'concat', 'includereplace' ]);

};