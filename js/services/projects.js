angular.module('Portfolio')
	.factory('projectsFactory',['$http',function($http) {
		var promise = $http.get('js/json/projects.json')
		.then(function(success) {
				promise = success.data;
				return promise;
			},
			function(error) {		
				promise = error.data;			
				return promise;
			});
		return promise;
	}]);