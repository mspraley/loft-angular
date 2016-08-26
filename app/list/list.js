'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('list', ['ngRoute'])
	.directive('list', [function() {
		return {
			restrict: 'E',
			templateUrl: './list/list.html',
			scope: {
				data: '=',
				setZone: '=',
				zone: '=',
				select: '='
			},
			link : function($scope, element) {
				$scope.selectedItem = 0;
				var startX = 0;
				var endX = 0;

				$scope.selectItem = function(item) {
					$scope.selectedItem = item.name;
					$scope.select(item);
					$scope.setZone(null, 0, null);	
				}
				
				element.on('touchstart', function(e){
					startX = e.changedTouches[0].pageX;
				})

				element.on('touchmove', function(e){
						endX = e.changedTouches[0].pageX;
						if (Math.abs(endX - startX) > 100) {
							if (endX > startX) {
								$scope.setZone(e, $scope.zone + 1, null);
							} else if(endX < startX) {
								$scope.setZone(e, $scope.zone - 1, null);
							}
						}
				});

				// element.on('touchend', function(e){
				// 	startX = endX = 0;
				// 	$scope.setZone(e, 0, null);
				// });
			}
		}
	}]);
});

