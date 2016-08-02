var providerModule = angular.module('providerModule', []);

providerModule.provider('dbProvider', function() {
    var connectionString = 'local';

    return {
        setConnectionString: function(connection){
            connectionString = connection;
        },
        $get: function () {
            function getConnectionString() {
                return connectionString;
            }
            return {
                timeOut: 10,
                getConnectionString: getConnectionString
            }
        }
    }
});

