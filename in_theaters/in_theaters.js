(function (angular) {
    var app = angular.module('in_theaters', ['ngRoute', 'myJsonpService']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/in_theaters/:page?', {
            templateUrl: './in_theaters/in_theaters.html',
            controller: 'in_theatersController'
        })
    }])
    app.controller('in_theatersController', [
        '$scope',
        '$http',
        '$routeParams',
        'myService',
        function ($scope, $http, $routeParams, myService) {
            $scope.pageSize = 5;
            $scope.page = ($routeParams.page || '1') - 0;
            var start = ($scope.page - 5) * $scope.pageSize;
            myService.jsonp('http://api.douban.com/v2/movie/in_theaters', { start: start, count: $scope.pageSize }, function (data) {
                $scope.data = data;
                $scope.$apply();
            })
        }])
})(angular) 