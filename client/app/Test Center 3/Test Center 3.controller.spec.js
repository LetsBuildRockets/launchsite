'use strict';

describe('Controller: TestCenter3Ctrl', function () {

  // load the controller's module
  beforeEach(module('launchsiteApp'));

  var TestCenter3Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestCenter3Ctrl = $controller('TestCenter3Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
