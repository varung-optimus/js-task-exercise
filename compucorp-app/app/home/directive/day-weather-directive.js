(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive:dayWeather
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="home">
       <file name="index.html">
        <day-weather></day-weather>
       </file>
     </example>
   *
   */
  angular
    .module('home')
    .directive('dayWeather', dayWeather);

  function dayWeather() {
    return {
      restrict: 'EA',
      scope: {
        useDayForecast: '=showEntry',
        forecast: '=dayWeather'
      },
      templateUrl: 'home/directive/day-weather-directive.tpl.html',
      replace: false,
      controllerAs: 'dayWeather',
      controller: function () {
        var vm = this;
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
        scope.getIconImageUrl = function (iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };

        scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      }
    };
  }
} ());
