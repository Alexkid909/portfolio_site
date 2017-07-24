angular.module('Portfolio')
.factory('sharedScopeFactory',function() {
	sharedScope = this;
	sharedScope.isInViewport = function(element) {
	var rect = element.getBoundingClientRect();
	var html = document.documentElement;
	
		return (
			//if the distance of the top of the element from the top of the viewport is >= 0 and 
			rect.top >= (0 - (rect.height)) &&
			//if the distance of the left of the element from the left of the viewport is >= 0 and  
			rect.left >= 0 &&
			//the distance from the bottom of the element from the top of the viewport <= the height of the viewport or the height of the html doc
			// rect.top < (window.innerHeight || html.clientHeight) &&
			rect.bottom <= (window.innerHeight + (rect.height)) &&
			//the distance from the bottom of the element from the top of the viewport <= the height of the viewport or the height of the html doc		
			rect.left < (window.innerWidth || html.clientWidth)
		);
	};

	sharedScope.checkIfInView = function(element,scope,callback) {
		if(sharedScope.isInViewport(element)) {
			element.classList.add('isinviewport');
		} else {
			element.classList.remove('isinviewport');
		}
		if(callback) {
			callback();
		}
	};
	return this;
})
