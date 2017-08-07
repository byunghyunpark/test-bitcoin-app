angular.module('App')
    .controller('RatesController', function ($scope, $http, Currencies) {

        $scope.currencies = Currencies;

        $scope.load = function () {
            $http.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD').success(function (tickers) {
                angular.forEach($scope.currencies, function (currency) {
                    currency.ticker = tickers;
                    currency.ticker.timestamp = new Date(currency.ticker.timestamp);
                });
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete')
            })
        };

        $scope.load();
    });
