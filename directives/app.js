var app = angular.module('app',['searchBoxModule']);

app.controller('SimpleController', ['$scope', 'peopleService', function ($scope, peopleService) {
    $scope.people = peopleService.get();
}]);