angular.module('lab11', ['ngCordova'])

    .controller('lab11Controller', function($scope, $cordovaDevice){

        document.addEventListener("deviceready", function(){

            var info = $cordovaDevice.getDevice();

           $scope.data = $cordovaDevice.getDevice();

            var data = [];

            angular.forEach(info, function(value, key){
                this.push(key + '= ' + value);
            }, data);


            $scope.information = data;

            console.log(data);

        }, false);
        
});