angular.module('lab4.services', ['ngResource'])
.factory('data', function($resource){

    'use strict';

    return $resource('http://127.0.0.1:3636/data');
});