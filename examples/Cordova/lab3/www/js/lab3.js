console.log('after onDeviceReady');

var data_node = document.getElementById('acceleration-info');

function onAccelerationSuccess(acceleration){

    console.log('onAccelerationSuccess ok');

	data_node.innerHTML = '<b>X:</b> ' + acceleration.x + '<br />' +
						  '<b>Y:</b> ' + acceleration.y + '<br />' +
						  '<b>Z:</b> ' + acceleration.z + '<br />';
}

function onAccelerationError(){
	console.log('onAccelerationError ok');
}

var activateAccelerometer = function(){

    console.log('activateAccelerometer ok');

	var options = {frequency: 500};

	var watchID = navigator.accelerometer.watchAcceleration(onAccelerationSuccess, onAccelerationError, options);
}