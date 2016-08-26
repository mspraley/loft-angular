'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('car', ['ngRoute'])
	.directive('car', [function() {
		return {
			restrict: 'E',
			templateUrl: './car/car.html',
			scope: {
				data: '='
			},
            link : function($scope) {
                $scope.charge = ($scope.data.charge * 360)  + 'px';
            }
		}
	}]);
});