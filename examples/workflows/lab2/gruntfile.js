module.exports = function(grunt){

	// Cargando plugin para el ofuscado de los archivos con `uglify`
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Configuración del proyecto y la tarea
	grunt.initConfig({
		uglify: {
			target1: {
				src: 'lab7-1.js',
				dest: 'lab7-1.min.js'
			}
		}
	});

	grunt.registerTask('default', ['uglify']);
};