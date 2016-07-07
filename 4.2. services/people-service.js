var serviceModule = angular.module('serviceModule', []);

serviceModule.service('peopleService', function () {
    var get = function () {
        return [
            "John",
            "Alex",
            "Andrew",
            "Jack",
            null,
            undefined
        ];
    };

    return {
        get: get
    }
});