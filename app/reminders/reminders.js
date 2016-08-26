'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('reminders', ['ngRoute'])
	.directive('reminders', [function() {
		return {
			restrict: 'E',
			templateUrl: './reminders/reminders.html',
			scope: {
				data: '='
			},
			link : function($scope) {
				$scope.more = function() {
					$scope.open = !$scope.open;
				}
			}
		}
	}]);
});

