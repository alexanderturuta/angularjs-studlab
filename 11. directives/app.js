var app = angular.module('app',[]);

function SimpleController($scope) {
    $scope.people = [
        "John",
        "Alex",
        "Andrew",
        "Jack"
    ];
    $scope.isShown = true;
    $scope.toggle = function () {
        $scope.isShown = !$scope.isShown;
    }

}

app.controller('SimpleController', ['$scope', SimpleController]);