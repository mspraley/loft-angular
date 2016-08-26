'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('loftCtrl', ['ngRoute'])
	.controller('loftCtrl', ['$scope', function($scope) {
        var ctrl = this;

        ctrl.reminders = [
            {
                'type' : 'flight',
                'arrival' : 'LAX',
                'departure' : 'ATL',
                'arrivaltime' : '10:30 AM',
                'departuretime' : '7:30 AM',
                'arrivalterminal' : 'TERMINAL D11',
                'departureterminal': 'TERMINAL B23'
            },
            {
                'type' : 'default',
                'text' : 'Pay HOA Check'
            },
            {
                'type' : 'default',
                'text' : 'Wash car and get detailed'
            },
            {
                'type' : 'default',
                'text' : 'Give Oliver a bath'
            }
        ]

        ctrl.lights = [
            {
                'name' : 'Living Room',
                'status' : 0
            },
            {
                'name' : 'Bedroom',
                'status' : 1
            },
            {
                'name' : 'Kitchen',
                'status' : 0
            },
            {
                'name' : 'Hallway',
                'status' : 0
            }
        ]

        ctrl.bills = [
            {
                'name' : 'electric',
                'total' : 65.54
            },
            {
                'name' : 'water',
                'total' : 34.56
            },
            {
                'name' : 'wifi',
                'total' : 59.99
            }
        ]

        ctrl.music = {
            'artist' : 'deadmau5',
            'song' : 'I Remember (Original Mix)'
        }

        ctrl.health = [
            {
                'name' : 'Steps',
                'value' : 8493
            },
            {
                'name' : 'Weight',
                'value' : 176,
                'suffix' : 'lbs'
            },
            {
                'name' : 'Heartrate',
                'value' : 98,
                'suffix' : 'bpm'
            },
            {
                'name' : 'Sleep',
                'value' : '6:52',
                'suffix' : 'hrs'
            }
        ]

        ctrl.car = {
            make : 'Tesla',
            model : 'Model 1',
            location : 'Picking up Marc Corbett',
            charge: 0.8,
        }
	}]);
});

