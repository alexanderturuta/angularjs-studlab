var app = angular.module('app',[]);

app.controller('EventController', ['$scope', function ($scope) {
    $scope.count = 0;
    $scope.$on('inc', function () {
        $scope.count++;
    })
}]);