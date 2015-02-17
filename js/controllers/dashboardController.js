controllers.controller('DashboardController', ['$scope', '$rootScope', '$route', function($scope, $rootScope, $route){
	
	// debugger;

	$rootScope.$on('$routeChangeStart', function(event, next, current){
		
		// menu highlighting
		for (var i = 0; i < $scope.navigation.length; i++) {
			if($scope.navigation[i].type == 'category'){
				$scope.navigation[i].selected = false;
				for (var j = 0; j < $scope.navigation[i].options.length; j++) {
					$scope.navigation[i].options[j].selected = false;
					if($scope.navigation[i].options[j].href == next.$$route.originalPath){
						$scope.navigation[i].selected = true;
						$scope.navigation[i].options[j].selected = true;
					}
				};
			}
		};
	});

	var baseUrl = $('base').attr('href');
	$scope.base = baseUrl;
	$scope.sidebarCollapsed = false;
	$scope.navigation = [
		{
			type: 'category',
			title: 'Dashboard',
			icon: 'ti-dashboard',
			options: [
				{
					title: 'Overview',
					href: baseUrl + '',
					id: 0
				},
				{
					title: 'Player Diagnostics',
					href: baseUrl + 'players',
					id: 1
				},
				{
					title: 'Team Diagnostics',
					href: baseUrl + 'teams',
					id: 2
				},
				{
					title: 'League Diagnostics',
					href: baseUrl + 'league',
					id: 3
				}
			],
			open: true,
			selected: true
		},
		{
			type: 'category',
			title: 'Statistics',
			icon: 'ti-bar-chart-alt',
			options: [
				{
					title: 'Fan Support',
					href: baseUrl + 'fans',
					id: 4
				},
				{
					title: 'Media Coverage',
					href: baseUrl + 'media',
					id: 5
				},
				{
					title: 'Salaries',
					href: baseUrl + 'salaries',
					id: 6
				}
			],
			open: true,
			selected: false
		},
		{
			type: 'category',
			title: 'Schedules',
			icon: 'ti-calendar',
			options: [
				{
					title: 'Team Schedule',
					href: baseUrl + 'schedule',
					id: 7
				},
				{
					title: 'Stadium Availability',
					href: baseUrl + 'stadiums',
					id: 8
				},
				{
					title: 'Events',
					href: baseUrl + 'events',
					id: 9
				}
			],
			open: true,
			selected: false
		},
		{
			type: 'option',
			title: '',
			href: baseUrl + '#',
			id: 10
		}
	];

	$scope.toggleSidebarCollapsed = function(){
		$scope.sidebarCollapsed = !$scope.sidebarCollapsed;
		if($scope.sidebarCollapsed){
			for (var i = 0; i < $scope.navigation.length; i++) {
				if($scope.navigation[i].type == 'category'){
					$scope.navigation[i].open = false;
				}
			};
		}
	}
	

}]);