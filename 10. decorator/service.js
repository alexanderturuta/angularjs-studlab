var serviceModule = angular.module('serviceModule', ['factoryModule', 'providerModule']);

function ApiService(apiToken) {
    this.getUsers = function () {
        //ajax with apiToken
        var users = [
            {
                id: 2,
                name: 'Alex'
            },
            {
                id: 5,
                name: 'John'
            },
            {
                id: 3,
                name: 'Captain America'
            }
        ];
        return users;
    };

    this.getUser = function (id) {
        //ajax with apiToken
        var users = this.getUsers();
        for(var i = 0; i < users.length; i++){
            if(id === users[i].id){
                return users[i];
            }
        }
        return {
            code: 404,
            message: "user was not found"
        };
    };
}

serviceModule.service('apiService', ['apiToken', ApiService]);

