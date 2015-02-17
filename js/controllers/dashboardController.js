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

	$scope.baseUrl = $('base').attr('href');;
	$scope.sidebarCollapsed = false;
	$scope.navigation = [
		{
			type: 'category',
			title: 'Dashboard',
			icon: 'ti-dashboard',
			options: [
				{
					title: 'Overview',
					href: '/',
					id: 0
				},
				{
					title: 'Player Diagnostics',
					href: '/players',
					id: 1
				},
				{
					title: 'Team Diagnostics',
					href: '/teams',
					id: 2
				},
				{
					title: 'League Diagnostics',
					href: '/league',
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
					href: '/fans',
					id: 4
				},
				{
					title: 'Media Coverage',
					href: '/media',
					id: 5
				},
				{
					title: 'Salaries',
					href: '/salaries',
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
					href: '/schedule',
					id: 7
				},
				{
					title: 'Stadium Availability',
					href: '/stadiums',
					id: 8
				},
				{
					title: 'Events',
					href: '/events',
					id: 9
				}
			],
			open: true,
			selected: false
		},
		{
			type: 'option',
			title: '',
			href: '/#',
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