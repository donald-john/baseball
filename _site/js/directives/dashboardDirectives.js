var directives = angular.module('baseball.directives', []);
directives.directive('menuTransform', ['$rootScope', function($rootScope){
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
}]);