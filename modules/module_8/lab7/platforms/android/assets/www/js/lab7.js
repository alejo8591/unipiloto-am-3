angular.module('lab7', ['ngCordova'])

.controller('lab7Controller', function($scope, $cordovaDialogs){

	$scope.active_alert =function(){
		$cordovaDialogs.alert('nCordova', 'Hola!', 'Aceptar')
	    .then(function() {
	      	console.log('Ok alerts');
	    });
	}
});