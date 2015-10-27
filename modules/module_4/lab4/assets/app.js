angular.module('lab4', ['ngRoute', 'lab4.controllers', 'lab4.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/data', {
            controller: 'lab4Controller',
            templateUrl: 'views/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});