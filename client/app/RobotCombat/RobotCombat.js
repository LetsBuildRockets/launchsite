'use strict';

angular.module('launchsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('RobotCombat', {
        url: '/RobotCombat',
        templateUrl: 'app/RobotCombat/RobotCombat.html',
        controller: 'RobotCombatCtrl'
      });
  });