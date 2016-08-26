'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('bills', ['ngRoute'])
	.directive('bills', [function() {
		return {
			restrict: 'E',
			templateUrl: './bills/bills.html',
			scope: {
				data: '='
			},
			link : function($scope, element) {
				$scope.total = 0;
				angular.forEach($scope.data, function(bill, key) {
  					$scope.total += bill.total;
				});
				$scope.more = function() {
					$scope.open = !$scope.open;
				}
			}
		}
	}]);
});
