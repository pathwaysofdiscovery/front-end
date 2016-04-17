'use strict';

/**
 * @ngdoc function
 * @name podsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the podsApp
 */
angular.module('podsApp')
  .controller('MainCtrl', function ($scope, $location, landingService) {
    var login_check = function () {
      if (landingService.username === undefined) {
        $location.path('/landing');
      } else {
        landingService.who().then(function (data) {
          if (data.username !== 'anonymous') {
            //console.log(data);
            landingService.username = data.username;
            $scope.username = data.username;
          }

        });

      }
    };


    login_check();

    var create_topic = function () {
      
    };

  });
