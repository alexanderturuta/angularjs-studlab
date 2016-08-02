var myApp = angular.module('factoryModule', ['valueModule']);

myApp.factory('apiToken', ['clientId', function (clientId) {
    var encrypt = function(data) {
        return btoa(data);
    };

    var apiToken = encrypt(clientId);

    return apiToken;
}]);

