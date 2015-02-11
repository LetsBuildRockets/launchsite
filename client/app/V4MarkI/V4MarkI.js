'use strict';

angular.module('launchsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('V4MarkI', {
        url: '/V4MarkI',
        templateUrl: 'app/V4MarkI/V4MarkI.html',
        controller: 'V4MarkICtrl'
      });
  });