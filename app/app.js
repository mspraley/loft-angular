'use strict';

define([
	'angular',
	'angularRoute',
	'moment',
	'loft/LoftController',
	'reminders/reminders',
	'lights/lights',
	'bills/bills',
	'home/home',
	'music/music',
	'health/health',
	'car/car'
], function(angular, angularRoute, moment, loftCtrl, reminders, lights, bills, home, music, health, car) {
	// Declare app level module which depends on views, and components
	return angular.module('loft', [
		'ngRoute',
		'loftCtrl',
		'reminders',
		'lights',
		'bills',
		'home',
		'music',
		'health',
		'car'
	])
});

