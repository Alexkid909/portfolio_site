angular.module('Portfolio')
	.directive('projectTile',
		function($window,$sce) {
			return {
				restrict: 'E',
				templateUrl:'js/directives/templates/project-tile.html',
				scope: {
					name: "=",
					description: "=",
					backgroundImgName: "=",
					linkUrl: "=",
					techTags: "=",
					placeholder: "=",
					elementId : "="
				},
				controller: 'projectTileCtrl',
				link: function(scope,element,attrs) {
					// scope.description = $sce.trustAsHtml(scope.body);
					// debugger;
					var projElement = element[0].querySelector('.project')

					scope.checkIfInView(projElement,scope);
					angular.element($window).bind('scroll',function() {
						scope.checkIfInView(projElement,scope,function() {
							scope.$apply();
						});
					});
				}
			}
	});