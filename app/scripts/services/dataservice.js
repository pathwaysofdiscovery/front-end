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

  });
