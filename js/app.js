angular.module('baseball', ['baseball.controllers', 'baseball.directives','ngRoute','ui.bootstrap'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html',
				controller: 'DashboardController'
			}).
			when('/playerdiagnostics', {
				templateUrl: 'partials/playerDiagnostics.html',
				controller: 'DashboardController'
			}).
			when('/teamdiagnostics', {
				templateUrl: 'partials/teamDiagnostics.html',
				controller: 'DashboardController'
			}).
			when('/leaguediagnostics', {
				templateUrl: 'partials/leagueDiagnostics.html',
				controller: 'DashboardController'
			}).
			when('/fans', {
				templateUrl: 'partials/fanSupport.html',
				controller: 'DashboardController'
			}).
			when('/media', {
				templateUrl: 'partials/mediaCoverage.html',
				controller: 'DashboardController'
			}).
			when('/salaries', {
				templateUrl: 'partials/salaries.html',
				controller: 'DashboardController'
			}).
			when('/teamschedule', {
				templateUrl: 'partials/teamSchedule.html',
				controller: 'DashboardController'
			}).
			when('/stadiums', {
				templateUrl: 'partials/stadiumAvailability.html',
				controller: 'DashboardController'
			}).
			when('/events', {
				templateUrl: 'partials/events.html',
				controller: 'DashboardController'
			});

		$locationProvider.html5Mode(true);
	}]);