$('#cordova-alert').bind('click', function(event){

    navigator.notification.alert('Información de Alerta', onAlert, '¡Alerta!', 'Aceptar');

    event.preventDefault();

});

$('#cordova-confirm').bind('click', function(event){

    navigator.notification.confirm('Información de confirmación', onConfirm, '¡Confirmación!', ['Aceptar', 'Cancelar']);

});

$('#cordova-prompt').bind('click', function(event){

    navigator.notification.prompt('Ingrese su nombre', onPrompt, 'Su nombre!', ['Aceptar', 'Cancelar'], 'Información');

});

$('#cordova-beep').bind('click', function(event){

    navigator.notification.beep(4);

});

$('#cordova-vibration').bind('click', function(event){

    navigator.vibrate(3000);

});

$('#cordova-vibration-pattern').bind('click', function(event){

    navigator.vibrateWithPattern([3000, 200, 1000, 300, 4000, 200, 1000]);

    // para firefoxos
    // navigator.vibrate([3000, 200, 1000, 300, 4000, 200, 1000]);

});


var onAlert = function(){

	console.log('¡Alert Correcto!');
};

var onConfirm = function(btn){

	if (btn == 1) {

		console.log('Botón Aceptar');

	} else {

		console.log('Botón Cancelar');
	}

};

var onPrompt = function(results){

	if (results.buttonIndex == 1) {
		console.log('Botón Aceptar');
		localStorage.setItem('name', results.input1);
		$('#prompt-info').html('<span>' + localStorage.getItem('name') + '</span>');
	} else {
		console.log('Botón Cancelar');
		localStorage.removeItem('name');
	}

};