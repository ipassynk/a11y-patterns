(function () {
  'use strict';

  angular
    .module('routeA11y')
    .directive('autoFocus', autoFocus);

  /** @ngInject */
  function autoFocus($rootScope) {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, element) {
      $rootScope.$on('$viewContentLoaded',
        function (event) {
          element[0].focus();
        });
    }
  }
})();
