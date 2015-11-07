angular.module('lab1', ['ngCordova'])

.controller('lab1Controller', function($scope, $cordovaDeviceMotion){

    document.addEventListener("deviceready", function () {

        $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
            $scope.x = result.x;
            $scope.y = result.y;
            $scope.z = result.z;
            $scope.time_stamp = result.timestamp;
        }, function(err) {
            // An error occurred. Show a message to the user
            console.log(err);
        });

    }, false);
    
});