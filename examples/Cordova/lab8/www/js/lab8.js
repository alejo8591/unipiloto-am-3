$('#cordova-geolocation').bind('click', function(event){

    var options = {
        timeout: 3000,
        enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError, options);

    event.preventDefault();
});

var onGeolocationSuccess = function(location){

	var date = new Date(location.timestamp);

	$('#data-geolocation').append(
		'<li><b>Latitud</b>' + location.coords.latitude + '</li>' +
		'<li><b>Longitud</b>' + location.coords.longitude + '</li>' +
		'<li><b>Altitud</b>' + location.coords.altitude + '</li>' +
		'<li><b>Precisión</b>' + location.coords.accuracy + '</li>' +
		'<li><b>Precisión de la Altitud</b>' + location.coords.altitudeAccuracy + '</li>' +
		'<li><b>Grado</b>' + location.coords.heading + '</li>' +
		'<li><b>Speed</b>' + location.coords.speed + '</li>' +
		'<li><b>Timestamp</b>' + date.toLocaleString() + '</li>'
	);
};

var onGeolocationError = function(error){

	var message = "Geolocation Error #" + error.code + "\n" + error.message;

	console.log(message);

	alert(message);
};