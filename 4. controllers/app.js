var app = angular.module('app',[]);

app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.people = [
        "John",
        "Alex",
        "Andrew",
        "Jack",
        null,
        undefined
    ];
}]);