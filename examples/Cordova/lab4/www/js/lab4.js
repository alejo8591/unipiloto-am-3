var data_node = document.getElementById('heading-info');

function getHeading(){
	 console.log('getHeading OK');
	 navigator.compass.getCurrentHeading(onHeadingSuccess, onHeadingError);
}

function onHeadingSuccess(compass){
	console.log('onHeadingSuccess OK');

	var date = new Date(compass.timestamp);

	console.log(compass.magneticHeading, compass.trueHeading, compass.headingAccuracy, date.toLocaleString());

	data_node.innerHTML = '<b>magneticHeading:</b> ' + compass.magneticHeading + '<br />' +
						  '<b>trueHeading:</b> ' + compass.trueHeading + '<br />' +
						  '<b>headingAccuracy:</b> ' + compass.headingAccuracy + '<br />' +
						  '<b>timestamp:</b> ' + date.toLocaleString() + '<br />';

}

function onHeadingError(compassError){
	console.log('onHeadingError OK');

	if (compassError.code == CompassError.COMPASS_NOT_SUPPORTED) {

		data_node.innerHTML = '<b>Bruluja no disponible</b>';
		alert('Bruluja no disponible');

	} else if (compassError.code == CompassError.COMPASS_INTERNAL_ERR) {

		data_node.innerHTML = '<b>Compass Internal Error</b>';
		alert('Compass Internal Error');

	} else {

		data_node.innerHTML = '<b>Error indeterminado o no reconocido por el API</b>';
		alert('Error indeterminado o no reconocido por el API');
	}
}