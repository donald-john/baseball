angular.module('baseball', ['baseball.controllers', 'baseball.directives','ngRoute','ui.bootstrap'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html',
				controller: 'DashboardController'
			});

		$locationProvider.html5Mode(true);
	}]);