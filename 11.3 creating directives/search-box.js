var searchBoxModule = angular.module('searchBoxModule', []);

searchBoxModule
    .controller('SearchController', ['$scope', function ($scope) {
        $scope.term = 'Search'
    }])
    
.directive('searchBox', function () {
    return {
        restrict: 'E',
        scope: {
            term: '=term'
        },
        controller: ['$scope', function ($scope) {
            $scope.searchTerm = '';
            $scope.search = function () {
                $scope.term = $scope.searchTerm;
            }
        }],
        templateUrl: 'search-box.html'
    }
});

