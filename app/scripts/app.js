'use strict';

/**
 * @ngdoc overview
 * @name podsApp
 * @description
 * # podsApp
 *
 * Main module of the application.
 */
angular
  .module('podsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/main', {
        templateUrl: 'static/app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'static/app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .otherwise({
        redirectTo: '/landing'
      });
  });
