angular.module('baseball', ['baseball.controllers', 'baseball.directives','ngRoute','ui.bootstrap'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		var baseUrl = $('base').attr('href');  // setting base doesn't seem to effect partial paths so...
		$routeProvider.otherwise('/');
		$routeProvider.
			when('/', {
				templateUrl: baseUrl + 'partials/main.html',
				controller: 'DashboardController'
			}).
			when('/players', {
				templateUrl: baseUrl + 'partials/playerDiagnostics.html',
				controller: 'DashboardController'
			}).
			when('/teams', {
				templateUrl: baseUrl + 'partials/teamDiagnostics.html',
				controller: 'DashboardController'
			}).
			when('/league', {
				templateUrl: baseUrl + 'partials/leagueDiagnostics.html',
				controller: 'DashboardController'
			}).
			when('/fans', {
				templateUrl: baseUrl + 'partials/fanSupport.html',
				controller: 'DashboardController'
			}).
			when('/media', {
				templateUrl: baseUrl + 'partials/mediaCoverage.html',
				controller: 'DashboardController'
			}).
			when('/salaries', {
				templateUrl: baseUrl + 'partials/salaries.html',
				controller: 'DashboardController'
			}).
			when('/schedule', {
				templateUrl: baseUrl + 'partials/teamSchedule.html',
				controller: 'DashboardController'
			}).
			when('/stadiums', {
				templateUrl: baseUrl + 'partials/stadiumAvailability.html',
				controller: 'DashboardController'
			}).
			when('/events', {
				templateUrl: baseUrl + 'partials/events.html',
				controller: 'DashboardController'
			});

		// $locationProvider.html5Mode(true);
	}]);