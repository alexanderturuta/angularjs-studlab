var serviceModule = angular.module('serviceModule', ['apiToken']);

function ApiService(apiToken) {
    this.getUsers = function () {
        //ajax with apiToken
    };

    this.getUser = function (id) {
        console.log(id);
        //ajax with apiToken
    };
}

serviceModule.service('apiService', ['apiToken', ApiService]);