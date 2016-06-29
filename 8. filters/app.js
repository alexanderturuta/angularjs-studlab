var app = angular.module('app',[]);

app.controller('SimpleController', ['$scope', function ($scope) {
    $scope.numbers = [
        "John",
        1,
        3,
        56,
        09,
        23,
        null,
        undefined
    ];
}]);

app.filter('ordinal', function () {
     function ordinal(number) {

        if(isNaN(number) || number < 1) {

            return number;

        } else {
            var lastDigit = number % 10;

            if(lastDigit === 1) {
                return number + 'st'
            } else if(lastDigit === 2) {
                return number + 'nd'
            } else if (lastDigit === 3) {
                return number + 'rd'
            } else if (lastDigit > 3) {
                return number + 'th'
            }

        }
    }
    
    return ordinal;
});