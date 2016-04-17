'use strict';

/**
 * @ngdoc function
 * @name podsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the podsApp
 */
angular.module('podsApp')
  .controller('MainCtrl', function ($scope, $location, landingService, dataService, $mdSidenav) {
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
    // login_check();
    $scope.model = {};
    $scope.model.topic = {};

    $scope.username = "Grayson";
    $scope.model.topics = [{name: "First", id: "1", lower: "first"},
      {name: "Second", id: "2", lower: "second"}, {name: "Third", id: "3", lower: "first"}];

    $scope.model.nodes = [
      {
        name: "Functions", id: "2", lower: "second", resources: [
        {
          name: "RESNAME",
          url: "URL",
          rating: '10'
        },
        {
          name: "RESNAME",
          url: "URL",
          rating: '10'
        }]
      },
      {
        name: "Alogrithms", id: "2", lower: "second", resources: [
        {
          name: "RESNAME",
          url: "URL",
          rating: '10'
        },
        {
          name: "RESNAME",
          url: "URL",
          rating: '10'
        }
      ]
      }];

    // $scope.SearchBoxAppear = true;
    //
    $scope.createTopic = function (new_topic) {
      console.log(new_topic);
      dataService.createTopic(new_topic).then(function (data) {
        $scope.model.topic.name = data.name;
        $scope.model.topic.id = data.id;
        console.log(data);
        // $scope.model.topic.nodes = [];
      });

    };

    $scope.getTopics = function () {
      dataService.getTopics().then(function (data) {
        $scope.model.topics = data.topics;
        console.log($scope.model.topics)
      });
    };

    $scope.getTopicInfo = function (topic) {
      console.log(topic.id);
      $scope.model.topic = topic;
      console.log($scope.model.topic);
      dataService.getNodes(topic.id).then(function (data) {
        $scope.model.nodes = data.nodes;
      });

    };

    $scope.getNodes = function () {
      if ($scope.model.topic.id != undefined) {
        dataService.getNodes($scope.model.topic.id).then(function (data) {
          $scope.topic.nodes = data.nodes;
        });
      } else {
        $scope.error = "No topic selected.";
      }
    };

    $scope.addNode = function () {
      if ($scope.model.topic.id != undefined && $scope.new_node.name != undefined) {
        dataService.addNode($scope.model.topic.id, $scope.new_node_name).then(function (data) {

        });
      } else {
        $scope.error = "No Topic selected, or no name for New Node."
      }
    };

////////////////////////////////////////////////////////////////////////////////

    //  UI STUFF
    $scope.querySearch = function (query) {
      return query ? $scope.model.topics.filter(createFilterFor(query)) : $scope.model.topics;
    };

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      console.log('~');
      console.log(lowercaseQuery);
      console.log('~!');
      return function filterFn(topic) {
        console.log(topic.lower);
        console.log('~>');
        return (topic.lower.indexOf(lowercaseQuery.lower) === 0);
      };
    }

    $scope.getTopics();
  });
