$(document).ready(function() {
	$('#get-info').bind('click', function(event) {

		console.log('click');

		$( '#list-info' ).empty();

		$( '#list-info' ).append(

			'<li>' + device.cordova + '</li>' +

			'<li>' + device.model + '</li>' +
			
			'<li>' + device.platform + '</li>' +

			'<li>' + device.uuid + '</li>' +

			'<li>' + device.version + '</li>'
		);

		event.preventDefault();

	});
});