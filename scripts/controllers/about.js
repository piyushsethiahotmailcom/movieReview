'use strict';

/**
 * @ngdoc function
 * @name loktraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loktraApp
 */
angular.module('loktraApp')
  .controller('AboutCtrl', function ($scope) {
  	var _s = $scope;
  	_s.savedMovies = [];
    if(JSON.parse(localStorage.getItem('libItems')) !== null){
    	_s.savedMovies = JSON.parse(localStorage.getItem('libItems'));
    }
    $("#movieBlock"+0).flip({
    		trigger:'hover'
    	});
    _s.flipDiv = function(index){
    	$("#movieBlock"+index).flip({
    		trigger:'click'
    	});
    };
  });
