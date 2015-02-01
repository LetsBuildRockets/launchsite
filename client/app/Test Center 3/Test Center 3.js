'use strict';

angular.module('launchsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Test Center 3', {
        url: '/TestCenter3',
        templateUrl: 'app/Test Center 3/Test Center 3.html',
        controller: 'TestCenter3Ctrl'
      });
  });