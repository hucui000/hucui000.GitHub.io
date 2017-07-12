(function(angular){
    var app = angular.module('home_page',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'./home_page/home_page.html',
            controller:'home_pageController'
        })
    }])
    app.controller('home_pageController',['$scope',function($scope){
        
    }])
})(angular) 