(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('DialogLocationEntryCtrl', DialogLocationEntryCtrl)
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(geolocation, $mdDialog, Weather) {
    var vm = this;
    vm.activated = true;
    vm.iconBaseUrl = 'http://openweathermap.org/img/w/';
    // vm.location = 'Delhi';

    vm.getForecastByLocation = function () {
      vm.forecast = Weather.queryForecastDaily({
        location: vm.location
      });
    };

    vm.getForecastByLocation();

    /*
    * Geolocation API to get user's location
    */
    geolocation.getLocation().then(function (data) {
      vm.activated = false;
      vm.coords = {
        lat: data.coords.latitude,
        long: data.coords.longitude
      };
      Weather.queryForecastDaily(vm.coords, function (result) {
        vm.location = result.city.name;
        vm.forecast = result;
      });
    }, function (err) {
      // Location is rejected, display the dialog for entry
      vm.activated = false;
      $mdDialog.show({
        controller: DialogLocationEntryCtrl,
        templateUrl: 'home/dialog/location.entry.tpl.html',
        parent: angular.element(document.body),
        clickOutsideToClose: false,
        fullscreen: true // Only for -xs, -sm breakpoints.
      })
        .then(function (answer) {
          vm.location = answer;
          vm.getForecastByLocation();
        }, function () {
          vm.status = 'You cancelled the dialog.';
        });
      console.log(err);
    });
  }

  function DialogLocationEntryCtrl($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide($scope.location);
    };
  }
} ());
