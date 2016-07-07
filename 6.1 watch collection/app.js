var app = angular.module('app',[]);

app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.names = ['John', 'Alex'];
    $scope.log =[];
    $scope.$watchCollection('names', function (newValue, oldValue) {
        $scope.log.push({newValue: newValue, oldValue: oldValue})
    }, true);

    $scope.clear = function () {
        $scope.log = [];
    };

    $scope.newName = '';

    $scope.addName = function () {
        $scope.names.push($scope.newName);
    }
}]);