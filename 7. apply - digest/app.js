var app = angular.module('app',[]);

app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.name = 'John';
    $scope.newName = 'Alex';
}]);