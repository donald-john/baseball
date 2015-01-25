var directives = angular.module('baseball.directives', []);
directives.directive('menuTransform', ['$rootScope', function($rootScope){
	return function(scope, element, attrs){
		element.bind('click', function(){
			var width = $('.sidetray').css('width') == '100px' ? '250px' : '100px';
			$('.sidetray').css('width', width);
		})	
	}
}]);