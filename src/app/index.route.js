(function () {
  'use strict';

  angular
    .module('routeA11y')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('base', {
        abstract: true,
        views: {
          "nav": {
            templateUrl: 'app/components/header/header.html'
          },
          "main": {
            template: '<ui-view role="main"></ui-view>'
          },
          "footer": {
            templateUrl: 'app/components/footer/footer.html'
          }
        }
      })
      .state('base.index', {
        url: "/",
        templateUrl: 'app/states/home/home.html'
      })
      .state('base.liveAria', {
        url: "/route1",
        templateUrl: 'app/states/route1/route1.html'
      })
      .state('base.busyButton', {
        url: "/route2",
        templateUrl: 'app/states/route3/route2.html'
      })
      .state('base.loading', {
        url: "/loading",
        templateUrl: 'app/states/route3/route3.html'
      })
      .state('base.alert', {
        url: "/alert",
        templateUrl: 'app/states/route3/route3.html'
      })
      .state('base.errorfield', {
        url: "/errorfield",
        templateUrl: 'app/states/route3/route3.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
