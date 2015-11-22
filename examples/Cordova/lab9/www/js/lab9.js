$(document).on('pageinit', '#add-contact', function(){

	console.log('Evento delegado `#add-contact`');

	$('#save-contact').on('click', function(){

		console.log('click en `#save-contact`');

		function alertCallback(){
			console.log('Ocurre el evento "oncConfirm"');
		}

		function onConfirm(buttonIndex){
			console.log('onConfirm OK');

			if (buttonIndex === 1) {

				$('#create-contact').trigger('reset');

				$.mobile.changePage('#home');

			} else {

				navigator.notification.alert(
					'Puede Continuar creando Contactos',
					alertCallback,
					'Contactos',
					'Aceptar'
				);

			}
		}

		function onSuccess(contact){

			console.log('onSuccess OK');

			navigator.notification.confirm(
				'¡Hola!, creaste el contacto: ' + contact.name.givenName + ' ' + contact.name.lastName,
				onConfirm,
				contact.name.familyName + ' ' + contact.name.givenName,
				['Confirmar', 'Cancelar']
			);
		}

		function onError(contactError){
			var message_text;

			switch(contactError.code){
				case ContactError.UNKNOW_ERROR:
					message_text = 'Error desconocido al crear el contacto';
					break;
				case ContactError.INVALID_ARGUMENT_ERROR:
					message_text = 'Existe un argumento invalido';
					break;
				case ContactError.TIMEOUT_ERROR:
					message_text = 'Timeout Error';
					break;
				case ContactError.PENDING_OPERATION_ERROR:
					message_text = 'Alguna operación pendiente genera error';
					break;
				case ContactError.IO_ERROR:
					message_text = 'IO Error';
					break;
				case ContactError.NOT_SUPPORTED_ERROR:
					message_text = 'Error no soprtado';
					break;
				case ContactError.PERMISSION_DENIED_ERROR:
					message_text = 'Denegación de permisos para la operación';
					break;
				default:
					message_text = 'Error desconocido: (' + ContactError.code + ')';
			}

			navigator.notification.alert(message_text, null, 'Error al guardar');
		}


		var contact = navigator.contacts.create();

		contact.displayName = $('#first-name').val();

		contact.nickName = $('#first-name').val();

		var name = new ContactName();

		name.givenName = $('#first-name').val();

		name.familyName = $('#last-name').val();

		contact.name = name;

		var email = $('#email').val();

		var emails = [];

		emails[0] = new ContactField('personal', email, true);

		contact.emails = emails;

		var mobile = $('#phone').val();

		var mobile_numbers = [];

		mobile_numbers[0] = new ContactField('mobile', mobile, true);

		contact.phoneNumbers = mobile_numbers;

		console.log(contact);

		contact.save(onSuccess, onError);
	});
});