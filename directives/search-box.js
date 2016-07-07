var searchBoxModule = angular.module('searchBoxModule', []);

searchBoxModule
    .controller('SearchController', ['$scope', function ($scope) {
        $scope.term = 'Search'
    }])
    
.directive('searchBox', function () {
    function link(scope, element, attr) {
        scope.$watch(attr.term, function (value) {
            console.log(value)
        })
    }


    return {
        link: link,
        restrict: 'E',
        scope: {
            term: '=term'
        },
        template: '<input type="text" ng-value="term"/><button>Search</button>'
    }
});

