angular.module('Portfolio').directive('projects',function() {
	return {
		restrict: 'E',
		templateUrl:'js/directives/templates/projects.html',
		controller: 'ProjectsCtrl',
		link: function(scope,element) {
				debugger;
				var elementNode = element[0]
				var devLogoBanner = elementNode.querySelector('#dev-logo-banner');
				

				scope.projectFilterHandler = function(event) {
					debugger;
					var language;
					var projects = elementNode.querySelectorAll('.project');

					function removeProjectsFilter() {
						var greyedoutProjects = elementNode.querySelectorAll('.project.greyout')
						if (greyedoutProjects.length > 0) {
							greyedoutProjects.forEach(function(project) {
								project.classList.remove("greyout");
							});
						}; 

					};
				
					function filterProjects(language) {
							projects.forEach(function(project) {
								var projectClassName = project.className; 
								if(projectClassName.search(language) < 0) {
									project.classList.add("greyout");
								};
							});
					};

					removeProjectsFilter();
					function getLanguage(element) {
						if (element.localName == 'li') {
							return element.id;
						} else {
							return getLanguage(element.parentElement);
						};
					}
					var language = getLanguage(event.target);
					if (language === 'all') {
						return false
					} else {				
						filterProjects(language);
					};
				};

				devLogoBanner.addEventListener('click',function(event) {
					scope.projectFilterHandler(event);
				});
		}			
	}
}); 