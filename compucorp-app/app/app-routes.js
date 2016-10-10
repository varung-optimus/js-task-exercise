(function () {
  'use strict';

  angular
    .module('compucorpApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
