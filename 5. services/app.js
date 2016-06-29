var app = angular.module('app',['serviceModule']);

app.controller('SimpleController', ['$scope', 'peopleService', function ($scope, peopleService) {
    $scope.people = peopleService.get();
}]);