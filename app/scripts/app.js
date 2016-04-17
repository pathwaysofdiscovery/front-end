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
    // 'ngTouch',
    'mgcrea.ngStrap',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/main', {
        templateUrl: 'views/grayson.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      // .when('/meow', {
      //   templateUrl: 'views/meow.html',
      //   controller: 'AppCtrl',
      //   controllerAs: 'meow'
      // })
      .otherwise({
        redirectTo: '/main'
      });
  });
