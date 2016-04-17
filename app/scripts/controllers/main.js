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
    $scope.model.topic = {};


    //
    $scope.create_topic = function () {
      if ($scope.model.new_topic != undefined) {
        DataService.create_topic($scope.model.new_topic).then(function (data) {
          $scope.model.topic.name = data.topic_name;
          $scope.model.topic.id = data.topic_id;
          $scope.model.topic.nodes = [];
        });
      }else{
        $scope.model.error = data.error;
      }
    };
  
    $scope.get_nodes = function () {
      if($scope.model.topic.id != undefined){
        
      }
    };
    
    $scope.add_node = function () {
      if ($scope.model.topic.id != undefined){
        
      }
    };

  });
