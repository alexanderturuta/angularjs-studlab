var app = angular.module('app',['valueModule', 'factoryModule', 'serviceModule']);


app.controller('SimpleController', ['$scope', 'clientId', 'apiService', function ($scope, clientId, apiService) {
    $scope.result = '';
    $scope.call = function () {
         $scope.result = apiService.getUser(+$scope.userId);
    };
    $scope.userId = 1;
}]);
