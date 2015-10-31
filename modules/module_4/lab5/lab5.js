var socket = io.connect('http://127.0.0.1:8585');

// En conexión con el servidor, pregunta el respectivo nombre de usuario y una devolución anonima del llamado
socket.on('connect', function(){

	// Llamado al evento `adduser` 
	socket.emit('adduser', prompt('Cual es su nombre de usuario'));
});

socket.on('updatechat', function(username, data){
 
	$('#conversation').append('<b>' + username + ':</b> ' + data + '<br />');

});

socket.on('updateusers', function(data){

	$('#users').empty();

	$.each(data, function(key, value){

		$('#users').append('<div>' + key + '</div>');

	});
});

$(document).ready(function(){

	$('#data-send').bind('click', function(){

		var message = $('#data').val();

		// Indicando al servidor que ejecute el evento `sendchat` y se le envian dos parametros
		socket.emit('sendchat', message);

	});

	// Cuando el usuario utiliza la tecla ENTER
	$('#data').keypress(function(event){

		if (event.which === 13) {
			
			$(this).blur();

			$('#data-send').focus().click();
		};
	});
});