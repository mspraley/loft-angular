'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('music', ['ngRoute'])
	.directive('music', [function() {
		return {
			restrict: 'E',
			templateUrl: './music/music.html',
			scope: {
				data: '='
			}
		}
	}]);
});

