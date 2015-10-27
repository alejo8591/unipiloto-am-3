angular.module('lab4.controllers', ['lab4.services'])
.controller('lab4Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});