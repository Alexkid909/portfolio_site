angular.module('Portfolio')
.controller('splashCtrl',[
	'$scope',
	'sharedScopeFactory',
	function($scope,sharedScopeFactory) {
		for (key in sharedScopeFactory) {
			$scope[key] = sharedScopeFactory[key];
		};
	}
]);