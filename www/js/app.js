angular.module('App', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
    })

    .state('tabs.rates', {
      url: '/rates',
      views: {
        'rates-tab': {
          templateUrl: 'views/rates/rates.html',
          controller: 'RatesController'
        }
      }
    })

    .state('tabs.history', {
      url: 'history',
      views: {
        'history-tab': {
          templateUrl: 'views/history/history.html'
        }
      }
    })

    .state('tabs.currencies', {
      url: 'currncies',
      views: {
        'currncies-tab': {
          templateUrl: 'views/currencies/currencies.html'
        }
      }
    })
    
    .state('tabs.detail', {
      url: '/detail/:currency',
      views: {
        'rates-tab': {
          templateUrl: 'views/detail/detail.html',
          controller: 'DetailController'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/rates');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// .factory('Currencies', function() {
//   return [
//     {
//       code: 'BTCAUD', 
//       text: 'Australian Dollar', 
//       selected: true
//     },
//     {
//       code: 'BTCBRL', 
//       text: 'Brazilian Real', 
//       selected: false
//     },
//     {
//       code: 'BTCCAD',
//       text: 'Canadian Dollar',
//       selected: true
//     }, 
//     {
//       code: 'BTCCHF',
//       text: 'Swiss Franc',
//       selected: false
//     },
//     {
//       code: 'BTCCNY',
//       text: 'Chinese Yuan',
//       selected: true
//     }, 
//     {
//       code: 'BTCEUR',
//       text: 'Euro',
//       selected: true
//     },
//     {
//       code: 'BTCGBP',
//       text: 'British Pound Sterling',
//       selected: true
//     }, 
//     {
//       code: 'BTCIDR',
//       text: 'Indonesian Rupiah',
//       selected: false
//     },
//     {
//       code: 'BTCILS',
//       text: 'Israeli New Sheqel',
//       selected: false
//     }, 
//     {
//       code: 'BTCMXN',
//       text: 'Mexican Peso',
//       selected: true
//     },
//     {
//       code: 'BTCNOK',
//       text: 'Norwegian Krone',
//       selected: false
//     }, 
//     {
//       code: 'BTCNZD',
//       text: 'New Zealand Dollar',
//       selected: false
//     },
//     {
//       code: 'BTCPLN',
//       text: 'Polish Zloty',
//       selected: false
//     }, 
//     {
//       code: 'BTCRON',
//       text: 'Romanian Leu',
//       selected: false
//     },
//     {
//       code: 'BTCRUB',
//       text: 'Russian Ruble',
//       selected: true
//     },
//     {
//       code: 'BTCSEK',
//       text: 'Swedish Krona',
//       selected: false
//     },
//     {
//       code: 'BTCSGD',
//       text: 'Singapore Dollar',
//       selected: false
//     },
//     {
//       code: 'BTCUSD',
//       text: 'United States Dollar',
//       selected: true
//     },
//     {
//       code: 'BTCZAR',
//       text: 'South African Rand',
//       selected: false
//     }
//   ];
// });

.factory('Currencies', function () {
  return [
    {
      code: 'BTCUSD',
      text: 'United States Dollar',
      selected: true
    },
    {
      code: 'BTCZAR',
      text: 'South African Rand',
      selected: true
    }
  ];
});