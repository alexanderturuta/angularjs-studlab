var serviceModule = angular.module('serviceModule', ['factoryModule', 'providerModule']);

function ApiService(apiToken, dbProvider) {
    this.getUsers = function () {
        console.log(apiToken);
        console.log('call server');
        //ajax with apiToken
        var localUsers = [
            {
                id: 2,
                name: 'Alex'
            },
            {
                id: 5,
                name: 'John'
            },
            [
                {
                    id: 3,
                    name: 'Captain America'
                }
            ]
        ];
        var prodUsers = [
            {
                id: 3,
                name: 'Jack'
            }
        ];
        var connection = dbProvider.getConnectionString();
        return connection === 'local'
            ? localUsers
            : prodUsers;
    };

    this.getUser = function (id) {
        console.log(apiToken + ' ' + id);
        console.log('call server');

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

serviceModule.service('apiService', ['apiToken', 'dbProvider', ApiService]);