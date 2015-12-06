(function() {
  'use strict';

  angular
    .module('routeA11y')
    .directive('calculator', calculator);

  /** @ngInject */
  function calculator() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/calculator/calculator.html',
      controller: CalculatorController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CalculatorController($timeout) {
      var vm = this;
      vm.calculate = calculate;

      function calculate() {
        vm.calculated = false;
        $timeout(function() {
          vm.calculated = true;
          vm.result = Math.floor((Math.random() * 10) + 1) + " + "  + Math.floor((Math.random() * 10) + 1);
        }, 1000);
      }
    }
  }

})();
