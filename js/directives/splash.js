angular.module('Portfolio').directive('splash',function($window) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/templates/splash.html',
		controller: 'splashCtrl',
		link: function(scope,element) {
			angular.element($window).bind('scroll',function() {
				var vidElement = element[0].querySelector('video#tyne')
				var splashIsInView = scope.isInViewport(element[0]);
				if (splashIsInView) {
					vidElement.play();
				} else {
					vidElement.pause();
				}
			});
		}
	}
});