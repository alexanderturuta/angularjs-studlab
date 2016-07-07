var app = angular.module('app',[]);

app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.user = {
        name: 'John'
    };
    $scope.log =[];

    $scope.$watch('user', function (newValue, oldValue) {
        $scope.log.push({newValue: newValue, oldValue: oldValue})
    }, true);

    $scope.clear = function () {
        $scope.log = [];
    }
}]);