/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Weather', function () {
  var factory;

  beforeEach(module('home'));

  beforeEach(inject(function (Weather) {
    factory = Weather;
  }));

  it('should have someValue be Weather', function () {
    expect(factory.someValue).toEqual('Weather');
  });

  it('should have someMethod return Weather', function () {
    expect(factory.someMethod()).toEqual('Weather');
  });
});
