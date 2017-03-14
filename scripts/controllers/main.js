'use strict';

/**
 * @ngdoc function
 * @name loktraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loktraApp
 */
angular.module('loktraApp')
  .controller('MainCtrl', function ($scope, remote, $location) {
    	var _s = $scope;
    	var params = {};
    	_s.isLoading = false;
    	_s.showEmptyError = false;
    	_s.movieName = {
    		title:"",
    		ratings:0
    	};
    	_s.dataOrLoader = false;
    	_s.searchResp = {};
    	_s.getMovies = function(){
    		if (_s.movieName.title && _s.movieName.title !== "") {
    			_s.showEmptyError = false;
    			_s.isLoading = true;
	    		params.t = _s.movieName.title ;
	    		var successCb = function(resp){
	    			_s.isLoading = false;
	    			_s.dataOrLoader = true;
	    				_s.searchResp = {
	    					poster:resp.data.Poster,
	    					actors: resp.data.Actors,
	    					releaseDate: resp.data.Released,
	    					director: resp.data.Director,
	    					rating: resp.data.imdbRating
	    				};
	    		};
	    		var failureCb = function(resp){
	    			_s.isLoading = false;
	    			_s.dataOrLoader = true;
	    			window.alert("Couldn't get Data");
	    			console.log(resp);
	    		};
	    		remote.get(params).then(successCb,failureCb);
    		}
    		else{
    			_s.dataOrLoader = false;
    			_s.isLoading = false;
    			_s.showEmptyError = true;
    		}
    	};
    	_s.addToLib = function(){
    		var arrOfObj = [];
    		if(JSON.parse(localStorage.getItem('libItems')) !== null){
    			var retrievedObject = JSON.parse(localStorage.getItem('libItems'));
    			arrOfObj = retrievedObject;
    			arrOfObj.push(_s.searchResp);
    			localStorage.setItem('libItems', JSON.stringify(arrOfObj));	
    		}
			else{
				arrOfObj.push(_s.searchResp);
				localStorage.setItem('libItems', JSON.stringify(arrOfObj));	
			}
    	};
    });
