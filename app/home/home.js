'use strict';
define([
	'angular',
	'angularRoute',
    'moment',
], function(angular) {
	angular.module('home', ['ngRoute'])
	.directive('home', [function() {
		return {
			restrict: 'E',
			templateUrl: './home/home.html',
			scope: {
				data: '='
			},
            link : function($scope) {
                $scope.time = moment().format('h:mm');
                setInterval(function(){
                    $scope.time = moment().format('h:mm');
                    $scope.$apply();
                }, 1000)
                $scope.greeting = "Morning";
                $scope.temp = "83";
                $scope.calendar = 4;
            }
		}
	}]);
});

