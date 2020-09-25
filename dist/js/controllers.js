/*! Kegs.js v0.0.1 | (c) 2020 Matt Spaanem | MIT License | https://github.com/mutedog/kegs.js */
(function () {
	"use strict";

/* Controllers */

var kegsApp = angular.module('kegsApp', []);

kegsApp.controller('KegListCtrl', (function ($scope, $http) {
	$http.get('beers.json').success((function(data) {
		$scope.kegs = data;
	}));
	$scope.orderProp = 'tap';
	$scope.Math = window.Math;
	$scope.form = false;

	$scope.save = function(kegId, newvol) {
		for(var i = 0; i < $scope.kegs.length; i++) {
			if ($scope.kegs[i]['tap'] == kegId) {
				if (newvol < 0) {
					$scope.kegs[i]['volume'] = 0;
				} else if (newvol > 640) {
					$scope.kegs[i]['volume'] = 640;
				} else {
					$scope.kegs[i]['volume'] = newvol;
				}
			}
		}
		//post new json to php for writing
		$http.post('json.php', $scope.kegs).
		  success((function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    // alert(data);
		  })).
		  error((function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    alert("FAIL");
		  }));

	};
}));

}());