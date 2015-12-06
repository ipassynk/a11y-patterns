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
            template: '<ui-view autoscroll></ui-view>'
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
      .state('base.route1', {
        url: "/route1",
        templateUrl: 'app/states/route1/route1.html'
      })
      .state('base.route2', {
        url: "/route2",
        templateUrl: 'app/states/route2/route2.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
