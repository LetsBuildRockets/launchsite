'use strict';

angular.module('launchsiteApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Rocket Engine',
      'link': '/V4MarkI'
    },{
      'title': 'Test Center',
      'link': '/TestCenter3'
    },{
      'title': 'Combat Robots',
      'link': '/RobotCombat'
    },{
      'title': 'About',
      'link': '/about'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });