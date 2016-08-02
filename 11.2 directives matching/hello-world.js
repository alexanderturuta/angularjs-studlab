var helloWorldModule = angular.module('helloWorldModule', []);

helloWorldModule
    .controller('SearchController', ['$scope', function ($scope) {
    }])
    
.directive('helloWorld', function () {
    return {
        restrict: 'M',
        templateUrl: 'hello-world.html'
    }
});

