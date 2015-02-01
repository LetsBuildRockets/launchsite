'use strict';

angular.module('launchsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('About', {
        url: '/about',
        templateUrl: 'app/About/About.html',
        controller: 'AboutCtrl'
      });
  });