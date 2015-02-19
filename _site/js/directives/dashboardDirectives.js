var directives = angular.module('baseball.directives', []);
directives.directive('menuTransform', [function(){
	return function(scope, element, attrs){
		element.bind('click', function(){
			var width = $('.sidetray').width() == 60 ? 250 : 60;
			$('.sidetray').width(width);
			if(width == 60){
				$('.title').hide();
				$('.logo').width(60)
				$('.logo-wrapper').width(60)
				$('.menu-wrapper').width(60)
				$('.logo img').width(50);
				$('.logo img').css('padding','6px');
				$('.logo img').css('margin-top','8px');

				// switch to small brand logo
				$('.brand-wrapper .large-blogo').hide();
				$('.brand-wrapper .small-blogo').show();
			}else {
				$('.title').show();
				$('.logo').width(80)
				$('.logo-wrapper').width(250)
				$('.menu-wrapper').width(250)
				$('.logo img').width(65);
				$('.logo img').css('padding','7px');
				$('.logo img').css('margin-top','0px');

				// switch to large brand logo
				$('.brand-wrapper .large-blogo').show();
				$('.brand-wrapper .small-blogo').hide();
			}
		});
	}
}]).directive('chartjs',[function(){
	return function(scope, element, attrs){

		var data = jQuery.parseJSON(attrs.object);
		var type = attrs.type;
		var options = (attrs.options == "") ? {} : jQuery.parseJSON(attrs.options);
		var id = attrs.id;
		var chart;
		switch(type){
			case "polar-area":
				chart = new Chart(element[0].getContext("2d")).PolarArea(data, options);
				break;
			case "doughnut":
				chart = new Chart(element[0].getContext("2d")).Doughnut(data, options);
				break;
			default:
				throw "Need to specify chart type";
				break;
		}
		// scope.charts.push({id: id, chart: chart});
		// use broadcast instead
	}
}]);