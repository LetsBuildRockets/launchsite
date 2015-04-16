'use strict';

describe('Controller: RobotCombatCtrl', function () {

  // load the controller's module
  beforeEach(module('launchsiteApp'));

  var RobotCombatCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RobotCombatCtrl = $controller('RobotCombatCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
