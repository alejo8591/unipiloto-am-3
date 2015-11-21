angular.module('lab7', ['ngCordova'])

.controller('lab7Controller', function($scope, $cordovaDialogs){

	console.log('load lab7Controller');

	$scope.active_alert =function(){
		$cordovaDialogs.alert('nCordova', 'Hola!', 'Aceptar')
	    .then(function() {
	      	console.log('Ok alerts');
	    });
	};


	$scope.active_confirm = function(){

		 $cordovaDialogs.confirm('QUe vas a utilizar', 'Confirmar', ['Aceptar','Cancelar'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;

		      if (btnIndex === 0) {

		      } 

		      else if(btnIndex===1){

		      	console.log('El boton es Aceptar');
		      }

		      else {

		      	console.log('El boton es Cancelar');
		      }

    	});
	};
});