var myApp = angular.module('factoryModule', ['valueModule']);

myApp.factory('apiToken', ['clientId', function (clientId) {
    var encrypt = function(data1, data2) {
        // NSA-proof encryption algorithm:
        return (data1 + ':' + data2).toUpperCase();
    };

    var secret = window.localStorage.getItem('myApp.secret');
    var apiToken = encrypt(clientId, secret);

    return apiToken;
}]);
