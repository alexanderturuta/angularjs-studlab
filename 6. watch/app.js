var app = angular.module('app',[]);

app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.name = 'John'
    $scope.log =[];

    $scope.$watch('name', function (newValue, oldValue) {
        $scope.log.push({newValue: newValue, oldValue: oldValue})
    });

    $scope.clear = function () {
        $scope.log = [];
    }
}]);