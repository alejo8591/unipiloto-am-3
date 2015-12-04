angular.module('app.controllers', ['ui.router', 'app.services'])

.controller('HomeCtrl', function ($scope, $state) {

    $scope.content = ['page-one', 'page-two', 'page-three'];

    $scope.setPage = function (page) {
        $state.transitionTo(page);
    };
})

.controller('PageOneCtrl', function ($scope, Products) {

    Products.item_detail.get({id: 7}, function(data){

        $scope.detail = data;

        console.log($scope.detail);
    });

})

.controller('PageTwoCtrl', function ($scope, Products) {

    var data = {
        "name": "Galaxy Tab",
        "type": "smartphone",
        "quantity": 10,
        "price": 1200000
    };

    Products.item_create.save(data, function(data){

        $scope.data = data;

        console.log($scope.data);
    });

})

.controller('PageThreeCtrl', function ($scope, Products) {

    Products.item_list.query(function(data){

        $scope.list = data;

        console.log($scope.list);
    });

});