'use strict';

/**
 * @ngdoc service
 * @name podsApp.DataService
 * @description
 * # DataService
 * Service in the podsApp.
 */
angular.module('podsApp')
  .service('dataService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var dataService = {};

    dataService.getTopics = function () {
      return $http.get('/api/topics').then(function (response) {
        //console.log(response.data); [
        //                              {"name": "topic",
        //                               "id": "id},
        //                              ["topic", "id],
        //                             ]

        return response.data;
      });
    };

    // dataService.searchTopics = function (query_string) {
    //   return $http({
    //     method: 'POST',
    //     url: '/api/topics/search',
    //     data: $.param({'query': query_string}),
    //     headers: {'Content-Type': 'application/json'}
    //   }).then(function (response) {
    //     return response.data;
    //   });
    // };

    dataService.createTopic = function (topic_name) {
      return $http({
        method: 'POST',
        url: '/api/topics/create',
        data: {name: topic_name},
        headers: {'Content-Type': 'application/json'}
      }).then(function (response) {
        return response.data;
      });
    };

    dataService.getNodes = function (topic_id) {
      console.log('in getNodes');
      console.log('/api/nodes/bytopic/' + topic_id);
      return $http.get('/api/nodes/bytopic/' + topic_id).then(function (response) {
        console.log(response);
        return response.data;
      });
    };

    dataService.addNode = function (topic_id, node_name) {
      return $http({
        method: 'POST',
        url: '/api/nodes/create',
        data: {topic_id: topic_id, node_name: node_name},
        headers: {'Content-Type': 'application/json'}
      }).then(function (response) {
        return response.data;
      });
    };

    return dataService;


  });
