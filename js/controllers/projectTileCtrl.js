angular.module('Portfolio')
.controller('projectTileCtrl',[
	'$scope',
	'sharedScopeFactory',
	function($scope,sharedScopeFactory) {
	for (key in sharedScopeFactory) {
		$scope[key] = sharedScopeFactory[key];
	}
	$scope.backgroundImgUrl = `images/projects/${$scope.backgroundImgName}`
	// $scope.isInView = false;
	// $scope.isInViewport = $scope.$parent.$parent.isInViewport;
	$scope.isMobileOS = $scope.$parent.$parent.isMobileOS;
}]);