var app = angular.module('app',['valueModule', 'factoryModule', 'serviceModule'])
    .config(['$provide', function ($provide) {
        $provide.decorator('apiService', ['$delegate', '$log', function ($delegate, $log) {
            var originFunc = $delegate.getUser;
            function decoratedFunc() {
                $log.log(arguments);
                return originFunc.apply(this, arguments);
            }

            $delegate.getUser = decoratedFunc;
            return $delegate;
        }])
    }]);


app.controller('SimpleController', ['$scope', 'clientId', 'apiService', function ($scope, clientId, apiService) {
    $scope.result = '';
    $scope.call = function () {
         $scope.result = apiService.getUser(+$scope.userId);
    };
    $scope.userId = 1;
}]);
