module.exports = function(grunt){

	// Cargando plugin para el ofuscado de los archivos con `uglify`
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Configuración del proyecto y la tarea
	grunt.initConfig({
		uglify: {
			target1: {
				src: 'lab7-2.js',
				dest: 'lab7-2.min.js'
			}
		},

		jshint: {
			options: {
				// http://www.jshint.com/docs/options/
				curly: true,
				eqeqeq: true
			},
			target1: ['Gruntfile.js', '*.js']
		}
	});

	grunt.registerTask('default', ['uglify']);

		grunt.registerTask('linting', ['jshint']);

};