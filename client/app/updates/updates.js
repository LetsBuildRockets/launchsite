'use strict';

angular.module('launchsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('updates', {
        url: '/updates',
        templateUrl: 'app/updates/updates.html',
        controller: 'UpdatesCtrl'
      });
  });