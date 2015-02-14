controllers.controller('DashboardController', ['$scope', function($scope){
	$scope.navigation = [
		{
			type: 'category',
			title: 'Dashboard',
			options: [
				{
					title: 'Player Diagnostics',
					href: '#'
				},
				{
					title: 'Team Diagnostics',
					href: '#'
				},
				{
					title: 'League Diagnostics',
					href: '#'
				}
			],
			open: true
		},
		{
			type: 'category',
			title: 'Statistics',
			options: [
				{
					title: 'Fan Support',
					href: '#'
				},
				{
					title: 'Media Coverage',
					href: '#'
				},
				{
					title: 'Salaries',
					href: '#'
				}
			],
			open: false
		},
		{
			type: 'category',
			title: 'Schedules',
			options: [
				{
					title: 'Team Schedule',
					href: '#'
				},
				{
					title: 'Stadium Availability',
					href: '#'
				},
				{
					title: 'Events',
					href: '#'
				}
			],
			open: false
		},
		{
			type: 'option',
			title: '',
			href: '#'
		}
	];

	$scope.sidebarCollapsed = false;

}]);