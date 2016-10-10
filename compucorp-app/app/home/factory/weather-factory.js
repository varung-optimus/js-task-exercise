(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name home.factory:Weather
   *
   * @description
   *
   */
  angular
    .module('home')
    .factory('Weather', Weather);

  function Weather($resource) {
    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location&lat=:lat&lon=:long',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      });
  }
} ());
