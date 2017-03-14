'use strict';

/**
 * @ngdoc service
 * @name loktraApp.remote
 * @description
 * # remote
 * Service in the loktraApp.
 */
angular.module('loktraApp')
  .service('remote', function ($http) {
  	var baseUrl = "http://www.omdbapi.com/"
  	return{
      get: function (params) {
  			var config = {
  				method: 'GET',
	        	url: baseUrl,        
	        	params:params
	        };
  			return $http(config);
  		}
  	};
});
