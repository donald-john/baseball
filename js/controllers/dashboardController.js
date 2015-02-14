controllers.controller('DashboardController', ['$scope', function($scope){
	
	$scope.sidebarCollapsed = false;
	$scope.navigation = [
		{
			type: 'category',
			title: 'Dashboard',
			icon: 'ti-dashboard',
			options: [
				{
					title: 'Player Diagnostics',
					href: '/playerdiagnostics',
					id: 1
				},
				{
					title: 'Team Diagnostics',
					href: '/teamdiagnostics',
					id: 2
				},
				{
					title: 'League Diagnostics',
					href: '/leaguediagnostics',
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
					href: '/teamschedule',
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
			href: '#',
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

	$scope.adjustSelection = function(category, option){
		for (var i = 0; i < $scope.navigation.length; i++) {
			if($scope.navigation[i].type == 'category'){
				$scope.navigation[i].selected = false;
				for (var j = 0; j < $scope.navigation[i].options.length; j++) {
					$scope.navigation[i].options[j].selected = false;
				};
			}
		};
		category.selected = true;
		option.selected = true;
	}
	

	

}]);