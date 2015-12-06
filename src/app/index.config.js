(function() {
  'use strict';

  angular
    .module('routeA11y')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
