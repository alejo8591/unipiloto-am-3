module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Configuración del proyecto y la tarea
	grunt.initConfig({

		concat:{
			css: {
				src: [
				'src/css/jquery.mobile-1.4.4.min.css', 
				'src/css/jquery.mobile.structure-1.4.4.min.css', 
				'src/css/jquery.mobile.theme-1.4.4.min.css', 
				'src/css/jquery.mobile.icons-1.4.4.min.css'
				],
				dest: 'dest/css/styles.css'
			},
			js: {
				src: [
				'src/js/jquery-1.11.1.min.js', 
				'src/js/jquery.mobile-1.4.4.min.js', 
				'src/js/lab5.js'
				],
				dest: 'dest/js/lab5.js'
			}, 
		},

		cssmin: {
			add_banner: {
				options: {
					banner: '/* Archivo para producción */'
				},
				files: {
      				'assets/css/styles.min.css': ['dest/css/styles.css']
    			}
			},
			minify: {
					expand: true,
					cwd : 'assets/css/',
					src: ['dest/css/styles.css'],
					dest: 'assets/css/',
					ext: '.min.css'
				}
		},
		
		uglify: {
			target1: {
				src: 'dest/js/lab5.js',
				dest: 'assets/js/lab5.min.js'
			}
		}
	});

	grunt.registerTask('concatjs', ['concat:js']);
	grunt.registerTask('concatcss', ['concat:css']);
	grunt.registerTask('cssmini', ['cssmin']);
	grunt.registerTask('uglifyjs', ['uglify']);

};