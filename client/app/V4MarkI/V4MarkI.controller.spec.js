'use strict';

describe('Controller: V4MarkICtrl', function () {

  // load the controller's module
  beforeEach(module('launchsiteApp'));

  var V4MarkICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    V4MarkICtrl = $controller('V4MarkICtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
