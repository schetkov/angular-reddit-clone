var app = angular.module('angularNews', ['ui.router'])
  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainController',
      });

      $urlRouterProvider.otherwise('home');
  }])
