'use strict';

/**
 * @ngdoc service
 * @name podsApp.DataService
 * @description
 * # DataService
 * Service in the podsApp.
 */
angular.module('podsApp')
  .service('DataService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var dataService = {};

    dataService.getTopics = function () {
       return $http.get('/api/topics').then(function(response){
                //console.log(response.data);
                return response.data;
            });
    };

    dataService.searchTopics = function (query_string) {
      return $http({
                method: 'POST',
                url: '/api/topics/search',
                data: $.param({'query': query_string}),
                headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                return response.data;
            });
    };

    dataService.createTopic = function (topic_name) {
      return $http({
                method: 'POST',
                url: '/api/topics/create',
                data: $.param({'topic_name': topic_name}),
                headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                return response.data;
            });
    };

    dataService.getNodes = function (topic_id) {

    };

    return dataService;

  });
