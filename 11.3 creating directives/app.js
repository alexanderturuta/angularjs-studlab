var app = angular.module('app',['searchBoxModule']);

function SimpleController($scope) {
    $scope.people = [
        "John",
        "Alex",
        "Andrew",
        "Jack"
    ];
    $scope.searchTerm = '';
}

app.controller('SimpleController', ['$scope', SimpleController]);