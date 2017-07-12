(function (angular) {
    var app = angular.module('myJsonpService', []);
    app.service('myService', ['$window', function ($window) {
        this.jsonp = function (url, arg, fn) {
            var script = $window.document.createElement('script');
            var str = '';
            for (var key in arg) {
                str += key + '=' + arg[key] + '&';
            }
            var funcName = 'myJson' + $window.Math.random().toString().substr(2)
            url += '?' + str + 'callback=' + funcName;
            $window[funcName] = function (data) {
                fn(data);
            }
            script.src = url;
             $window.document.body.appendChild(script);
        }
    }])
})(angular)