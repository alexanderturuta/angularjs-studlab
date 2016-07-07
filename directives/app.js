var app = angular.module('app',['searchBoxModule']);

app.controller('SimpleController', ['$scope', 'peopleService', function ($scope, peopleService) {
    $scope.people = peopleService.get();
}]);

function HeroDetailController() {

}

angular.module('heroApp').component('heroDetail', {
    templateUrl: 'heroDetail.html',
    controller: HeroDetailController,
    bindings: {
        hero: '='
    }
});