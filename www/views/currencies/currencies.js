angular.module('App')
.controller('CurrenciesController', function ($scope, Currencies) {
    $scope.currencies = Currencies;
    
    // 상태초기화
    $scope.state = {
        reordering: false
    };

    $scope.$on('$stateChangeStart', function () {
        $scope.state.reordering = false;
    });

    // 위치이동
    $scope.move = function(currency, fromIndex, toIndex) {
        $scope.currencies.splice(fromIndex, 1);
        $scope.currencies.splice(toIndex, 0, currency);
    };
});