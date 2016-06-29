var app = angular.module('app',[]);



app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.foo = 'bar';
}]);



app.controller('ChildController', ['$scope', function ($scope) {

}]);
