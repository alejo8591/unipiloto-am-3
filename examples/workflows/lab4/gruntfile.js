module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Configuración del proyecto y la tarea
	grunt.initConfig({

		concat:{
			options: {},
			dist: {
				src : ['src/css/base.css', 'src/css/skeleton.css', 'src/css/layout.css', 'src/css/styles.css'],
				dest : 'dest/css/styles.css'
			}
		},

		cssmin: {
			add_banner: {
				options: {
					banner: '/* Archivo para producción */'
				},
				files: {
      				'dest/css/styles.min.css': ['dest/css/styles.css']
    			}
			},
			minify: {
					expand: true,
					cwd : 'dest/css/',
					src: ['dest/css/styles.css'],
					dest: 'dest/css/',
					ext: '.min.css'
				}
		}
	});

	grunt.registerTask('concats', ['concat']);
	grunt.registerTask('cssmini', ['cssmin']);

};