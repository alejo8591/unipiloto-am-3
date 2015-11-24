/**
 * @fileOverview lab5-8.js home, login y registro de usuarios.
 * @author Alejandro Romero | alejo8591@gmail.com
 * @license MIT
 * @version 0.1.0
 */

sessionStorage.removeItem('sessionId');


/**
 * Creando objeto `Validate` para validar diferentes tipos de datos a través
 * de expresiones regulares
 * @constructor
 */
function Validate(){}


/*
 * @extends `Validate`
 */
Validate.prototype = {
	/**
	 * @param {string} email Correo electronico del usuario
	 * @property {*} RegExp pattern Regular Expression email
	 * @return {boolean}
	 */
	email : function(email){
		// Expresion Regular para la estructura de un email
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	},
	/**
	 * @param {number} uid Documento de identidad para el usuario
	 * @property {*} RegExp pattern Regular Expression caracteres del 0 al 9
	 * @return {boolean}
	 */
	uid : function(uid){
		// Expresion regular para solo numeros o caracteres del 0 al 9
		var pattern = new RegExp(/^[0-9]+$/);
		return pattern.test(uid);
	},

	/**
	 * @param {string} name nombre del usuario con soporte UTF-8
	 * @property {*} RegExp pattern Regular Expression letras, espacios y caracteres latinos
	 * @return {boolean}
	 */
	name : function(name){
		// Expresiones regulares propuestas por diferentes participantes del Diplomado
		// var pattern = new RegExp(/^[a-zA-Z]+[ a-zA-Z-_]*$/);
		// var pattern = new RegExp(/^[a-zA-Z-\s]+$/);
		// var pattern = new RegExp(/^[a-zA-Z _]+$/);
		// var pattern = new RegExp(/^[a-zA-Z|a-z\sA-Z]+$/);
		// var pattern = new RegExp(/^[a-zA-Z|a-z\sA-Z]+$/);

		// Expresión regular para validar caracteres latinos
		var pattern = new RegExp(/^[ÀÈÌÒÙ àèìòù ÁÉÍÓÚ Ý áéíóúý ÂÊÎÔÛ âêîôû ÃÑÕ ãñõ ÄËÏÖÜŸ äëïöüŸ ¡¿çÇŒœ ßØøÅå ÆæÞþÐð ""\w\d\s-'.,&#@:?!()$\/]+$/);
		return pattern.test(name);
	},

	/**
	 * @param {string} password Contraseña del usuario para validar
	 * @property {*} RegExp pattern Regular Expression letras y caracteres numericos
	 * @return {boolean}
	 */
	password : function(passwd){
		// Expresion regular para validar caracteres minusculas, mayusculas y del 0 al 9
		var pattern = new RegExp(/^[A-Za-z0-9]+$/);
		return pattern.test(passwd);
	}
};

/**
 * @constructor
 * home
 *
 * @see http://jquery.com/
 *
 * @see http://jquerymobile.com/
 *
 * @param {function} $(document).on('pagecreate','#home',callback) Objeto
 * Evento delegado utilizado para el documento `#home`
 * @param {string} pagecreate evento especifico del API de jQuery Mobile Documentacion: http://api.jquerymobile.com/pagecreate/
 * @param {string} #home id de documento con estructura jQuery Mobile, ubicado en /views/index.html
 */
$(document).on('pagecreate', '#home', function(){

	/*
	 * Verificando a traves de la API de Session Storage de Web Storage
	 * si se encuentra algún tipo de dato con un identificador `sessionId`
	 * Documentacion: http://www.w3schools.com/html/html5_webstorage.asp
	*/
	if ('sessionStorage' in window && window['sessionStorage'].length === 0){
		// Si no se cumple alguna de las dos opciones, redirige a `#login`
		$.mobile.changePage('#login');

	} else {

		if (sessionStorage.getItem('sessionId')){

			$.mobile.changePage('#home');

		} else {

			$.mobile.changePage('#register');
		}
	}
});


/*
* Evento delegado utilizando para el documento `#login`
* Se utiliza el evento `pagecreate` de la API de jQuery Mobile
* Documentacion: http://api.jquerymobile.com/pagecreate/
*/
$(document).on('pagecreate', '#login', function(){

	console.log('Evento delegado para `#login`');


	$('#login-user').bind('click', function(event){


		// Tomando la informacion del Formulario
		var userid = $('#userid').val();

		var password = $('#password').val();

		var validate = new Validate();

		// Verificando en consola los resultados de la validacion
		console.log(validate.email(userid), validate.password(password));

		if (validate.email(userid) && validate.password(password)){

			$.ajax({
				url: '/login',
				type: 'POST',
				dataType: "JSON",
				data: { "userid": userid, "password" : password }

			}).done(function(data){

				if (data.name !== undefined || data.email !== undefined || data.cookie !== undefined || data.uid !== undefined) {

					console.log(data.name, data.email, data.cookie, data.uid);

					$.mobile.changePage('#home');

				} else {

					$('#login-form').trigger('reset');

					$.mobile.changePage('#register');
				}

			}).fail(function(xhr, status, error){

				console.log(xhr, status, error);
			});

		} else {
			$.mobile.changePage('#register');
			event.preventDefault();
		}

		event.preventDefault();
	});
});


$(document).on('pagecreate', '#register', function(){

	console.log('Evento delegado para `#register`');

	$('#register-button').bind('click', function(event){

		var name = $('#name').val();

		var email = $('#email').val();

		var uid = $('#uid').val();

		var password = $('#register-password').val();

		var validate = new Validate();

		console.log(validate.name(name), validate.email(email), validate.uid(uid), validate.password(password));

		if (validate.name(name) && validate.email(email) && validate.uid(uid) && validate.password(password)){

			$.ajax({
				url: '/register',
				type: 'POST',
				dataType: "JSON",
				data: {  "name": name, "email": email ,"uid": uid, "password" : password }

			}).done(function(data){

				if (data.name !== undefined || data.email !== undefined || data.cookie !== undefined || data.uid !== undefined) {

					console.log(data.name, data.email, data.cookie, data.uid);

					$.mobile.changePage('#home');

					sessionStorage.setItem('sessionId', data.cookie);
					localStorage.setItem('name', data.name);
					localStorage.setItem('email', data.email);
					localStorage.setItem('uid', data.uid);
					localStorage.setItem('password', data.password);

				} else {

					$('#login-form').trigger('reset');

					$.mobile.changePage('#register');
				}

			}).fail(function(xhr, status, error){

				console.log(xhr, status, error);
			});

		} else {
			$.mobile.changePage('#register');
		}

		event.preventDefault();
	});
});
