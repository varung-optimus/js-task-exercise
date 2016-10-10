/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('dayWeather', function () {
  var scope
    , element;

  beforeEach(module('home', 'home/day-weather-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<day-weather></day-weather>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().dayWeather.name).toEqual('dayWeather');
  });
});
