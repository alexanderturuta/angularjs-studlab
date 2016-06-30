var app = angular.module('app',['serviceModule', 'providerModule', 'valueModule']);
    
    //.config(function (dbProvider) {
    //debugger
    //dbProvider.setConnectionString('production');
//});

app.controller('SimpleController', ['$scope', 'apiService', 'secret', function ($scope, apiService, secret) {
    $scope.call = function () {
        apiService.getUser(5);
    };
    $scope.secret = secret;
}]);
