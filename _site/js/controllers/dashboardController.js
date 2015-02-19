controllers.controller('DashboardController', ['$scope', '$rootScope', '$route', function($scope, $rootScope, $route){
	
	//  sample polar chart data
	$scope.charts = [];
	$scope.polarData = [
	    {
	        value: 300,
	        color:"#F7464A",
	        highlight: "#FF5A5E",
	        label: "Red"
	    },
	    {
	        value: 50,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Green"
	    },
	    {
	        value: 100,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Yellow"
	    },
	    {
	        value: 40,
	        color: "#949FB1",
	        highlight: "#A8B3C5",
	        label: "Grey"
	    },
	    {
	        value: 120,
	        color: "#4D5360",
	        highlight: "#616774",
	        label: "Dark Grey"
	    }
	];




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