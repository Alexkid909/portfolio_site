angular.module('Portfolio')
.controller('ProjectsCtrl',[
	'projectsFactory',
	'$scope',
	'$element',
	'sharedScopeFactory',
	function(projectsFactory,$scope,$element,sharedScopeFactory) {
		$scope.projects = {};
		for (key in sharedScopeFactory) {
			$scope[key] = sharedScopeFactory[key];
		};		
		projectsFactory.then(function(success) {
			$scope.projects = success;
		},function(error) {		
			$scope.projects = error;
		});
		$scope.detectMobileOS = function() {
				function getMobileOS() {
					var ua = navigator.userAgent.toLowerCase();
					var mobileOSs = {
						android: ua.indexOf("android"),
						ipad: ua.indexOf("ipad"),
						iphone: ua.indexOf("iphone"),
						windowsPhone: ua.indexOf("windows phone"),
						kindle: ua.indexOf("silk")
					}

					for (keys in mobileOSs) {
						if (mobileOSs[keys] > -1) {
							return keys;
						}
					}
				}

				if (getMobileOS()) {
					return true 
				} else {
					return false;
				}
		};
		$scope.isMobileOS = $scope.detectMobileOS();		
		$scope.counter = 0;
		$scope.fadeInAndTransition = function(elements,callback) {
			/*Animates in prehidden elements that are earmarked with the 'anim' class with a fade in and slide fade up effect 
				then removes the 'anim' class;*/
			if(elements.length < 1) {
				return false
			} else {
				elements.each(function() {
					var $this = $(this);
					setTimeout(function() {
						$this.addClass("slideUp");
						$scope.counter++;
					},$scope.animProperties.delayTime);
					$scope.animProperties.delayTime += 400;
				});
				$scope.animProperties.delayTime = 400;
			};
			if (callback) {
				callback();
			}
		};
		$scope.animProperties = {
			delayTime: 400
		}
		$scope.projectElementsInView = $element.find('.project');
		$scope.checkProjectsInView = function () {
				var projectsAreInView = $element.find('.project.isinviewport').length;
				$scope.projectElementsInView = $element.find('.project.isinviewport'); 
				return projectsAreInView;
		}
		$scope.fadeInProjectsInView = function(newValue,oldValue,$scope) {
				newValue && $scope.fadeInAndTransition($scope.projectElementsInView);
		};
		$scope.getProjectsOffsetHeight = function() {
			var projectsContainerHeight = $element.find('#project-tiles-1')[0].offsetHeight;
			return projectsContainerHeight;
		};
		$scope.setVerticalBannerHeight = function(newValue,oldValue) {
			var verticalBanner = document.getElementsByClassName("vertical-banner")[0];
			verticalBanner.style.height = newValue+"px";
		};
		if(!$scope.isMobileOS) {
			$scope.$watch(
				$scope.checkProjectsInView,
				$scope.fadeInProjectsInView
			);
			$scope.$watch(
				$scope.getProjectsOffsetHeight,
				$scope.setVerticalBannerHeight
			);			
		}
}]);