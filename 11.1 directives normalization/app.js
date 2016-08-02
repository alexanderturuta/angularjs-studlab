var app = angular.module('app',[]);

function SimpleController($scope) {
    $scope.name = 'John Smith';
}

app.controller('SimpleController', ['$scope', SimpleController]);