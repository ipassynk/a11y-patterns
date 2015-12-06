(function() {
  'use strict';

  angular
    .module('routeA11y')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
