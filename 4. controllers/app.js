var app = angular.module('app',[]);

function SimpleController($scope) {
    $scope.people = [
        "John",
        "Alex",
        "Andrew",
        "Jack"
    ];
}

app.controller('SimpleController', ['$scope', SimpleController]);