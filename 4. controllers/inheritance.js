var app = angular.module('app',[]);

app.controller('FatherController', ['$scope', function ($scope) {
    $scope.name = 'John';
}]);

app.controller('ChildController', ['$scope', function ($scope) {
    $scope.age = 40;
}]);

app.controller('GrandChildController', ['$scope', function ($scope) {
    $scope.lastname = 'Smith';
}]);