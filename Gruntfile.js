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
					// 'newer:jshint:all',
					'newer:uglify:target:files',
					'newer:includereplace:all:files'
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
			}
		},
		// JS Hint
		jshint: {
			all: {
				src: [ 'site/js/src/**.js' ],
				options: {
					globals: {
						'jQuery': true,
						'$'     : true
					},
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
			all: {
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
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-newer');

	// Default task
	grunt.registerTask('default', [ 'css', 'js' ]);

	// CSS
	grunt.registerTask('css', [ 'less' ]);

	// JS
	grunt.registerTask('js', [ 'uglify', 'includereplace' ]);

	// Watch
	grunt.registerTask('all', [ 'watch' ]);

};