angular.module('app', ['ui.router', 'app.controllers', 'app.services'])
    .config(function($stateProvider){

        $stateProvider

        .state({
            name: 'home',
            url: '/',
            templateUrl: 'content.html',
            controller: 'HomeCtrl'
        })

        .state({
            name: 'page-one',
            url: '/page-one',
            parent: 'home',
            templateUrl: 'content.page-one.html',
            controller: 'PageOneCtrl'
        })
        .state({
            name: 'page-two',
            url: '/page-two',
            parent: 'home',
            templateUrl: 'content.page-two.html',
            controller: 'PageTwoCtrl'
        })

        .state({
            name: 'page-three',
            url: '/page-three',
            parent: 'home',
            templateUrl: 'content.page-three.html',
            controller: 'PageThreeCtrl'
        });
})
.run(['$state', function ($state) {
    $state.transitionTo('home');
}]);