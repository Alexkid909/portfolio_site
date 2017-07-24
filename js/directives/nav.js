angular.module('Portfolio')
.directive('nav',function() {
	return {
		retrict: 'E',
		templateUrl: 'js/directives/templates/nav.html',
		controller: function($scope,$element) {
							// Slides out mobile nav from the right
				const mobileNavBtn = $element[0].querySelector('#mobile-nav a');
				const mainNav = $element[0].querySelector('#main-nav');
				const iconNav = $element[0].querySelector('#nav-icons');
				const navItems = $element[0].querySelectorAll('#main-nav li, #nav-icons #to-home li');
				const homeButton = iconNav.querySelector('#to-home');

				var mobileNavActive = false;
				function toggleMobileNav() {
					mainNav.classList.toggle('active');
					iconNav.classList.toggle('active');
					mobileNavActive = !mobileNavActive;
				}

				var scrlFrom;
				var scrlTo;
				var duration;

				function scrollTo(element) {
					scrlTo = document.body.scrollTop + element.getBoundingClientRect().top - document.querySelector('#nav-icons').clientHeight;
					duration = 600;
					scrollFromTo(document.body.scrollTop,scrlTo,duration)
				}

				function scrollFromTo(from,to, duration) {
				    if (duration <= 0) return;
				    var distance = to - from; 
				    var perTick = distance / duration * 10;
				    setTimeout(function() {
				        document.body.scrollTop += perTick;
				        if (document.body.scrollTop === to) return;
				        scrollFromTo(document.body.scrollTop, to, duration - 10);
				    }, 10);
				};

				mobileNavBtn.addEventListener('click',toggleMobileNav);
				for (var i = 0;i < navItems.length; i++) {			
					navItems[i].addEventListener('click',toggleMobileNav);
					navItems[i].addEventListener('click',function(e) {
						var target;						
						for (var i = 0;!target;i++) {
							if (e.path[i].localName == "a") {
								target = e.path[i];
							};
						};
						var elmnt = document.querySelector(target.hash);
						e.preventDefault();						
						scrollTo(elmnt);
					}); 
				};
				homeButton.addEventListener('click',function() {
					if (mobileNavActive) {
						toggleMobileNav();
					};
				});
		}
	}
});