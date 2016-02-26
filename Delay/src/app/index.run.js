(function() {
  'use strict';

  angular
    .module('delay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
