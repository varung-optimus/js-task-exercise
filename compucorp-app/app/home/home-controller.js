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

  function HomeCtrl(geolocation, $mdDialog) {
    var vm = this;
    vm.activated = true;

    geolocation.getLocation().then(function (data) {
      vm.activated = false;
      vm.coords = {
        lat: data.coords.latitude,
        long: data.coords.longitude
      };
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
          alert(answer);
          vm.status = 'You said the information was "' + answer + '".';
        }, function () {
          vm.status = 'You cancelled the dialog.';
        });
      console.log(err);
    });
  }

  function DialogLocationEntryCtrl($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
} ());
