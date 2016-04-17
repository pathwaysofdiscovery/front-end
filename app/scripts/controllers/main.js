'use strict';

/**
 * @ngdoc function
 * @name podsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the podsApp
 */
angular.module('podsApp')
  .controller('MainCtrl', function ($scope, $location, landingService, DataService) {
    //Login Check, must be logged in to reach the main page!!!
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

    //INIT
    login_check();
    $scope.model = {};

    //
    $scope.create_topic = function () {
      if ($scope.model.new_topic != undefined) {
        DataService.create_topic($scope.model.new_topic).then(function (data) {

        });
      }else{
        $scope.model.error = 
      }

    };

  });
