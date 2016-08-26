'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('lights', ['ngRoute'])
	.directive('lights', [function() {
		return {
			restrict: 'E',
			templateUrl: './lights/lights.html',
			scope: {
				data: '='
			}
		}
	}]);
});

