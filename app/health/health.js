'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('health', ['ngRoute'])
	.directive('health', [function() {
		return {
			restrict: 'E',
			templateUrl: './health/health.html',
			scope: {
				data: '='
			}
		}
	}]);
});
