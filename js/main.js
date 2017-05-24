var main = function() {

	// DOM Cache

	var $body = $('body');
	var $mainNav = $body.find('#nav-section');
	var $main = $body.find('.main');
	var $mainNavButtons = $mainNav.find('.main-nav-btn');
	var $header = $body.find('.section.header');
	var $mainSections = $(".main .section").not('#projects-content-2');
	var scrollCount = 0;



	//Animation Config

	var fadeOutOptions = {
		duration: '',
		easing: 'easeInCubic'
	}

// On Load Fade In Functions

	var sectionFadeInOptions = {
		duration: 1500,
		queue:true,
		start: function() {
			$(this).animate(sectionSlideInAnimProperties,sectionSlideInAnimOptions)
		}
	};

	var sectionSlideInAnimOptions = {
		duration: 1500,
		queue: false
	};

	var sectionSlideInAnimProperties = {
		"top":"-=125px",
		"opacity":1,

	};

	sectionsFadeAndTransitionIn = function() {
		$(this).each(function() {
			$(this).delay(delayTime).fadeIn(sectionFadeInOptions)
				delayTime +=1000;
		});
	};

	//initial animation delay
	var delayTime = 400;


	//Animates in prehidden elements that are earmarked with the 'anim' class with a fade in and slide fade up effect 
	// then removes the 'anim' class;
	fadeInAndTransition = function() {
			$animInView = $(".anim:in-viewport");
			if($animInView.length < 1) {
				return false
			} else {
			$animInView.each(function() {
				var $this = $(this);
				setTimeout(function() {
					$this.addClass("slideUp","fadeIn").removeClass("anim")},delayTime);
				delayTime += 400;
				});
			delayTime = 400;};
		};


	//Function to remove the anim class
	var removeAnimClass = function() {
		var animElements = document.getElementsByClassName('anim');
		for(i = 0;i < animElements.length;i) {
			var currentElement = animElements[0];
			currentElement.classList.remove('anim');
		};
	};		

	var functionRunning;

	//Handler functiont to loop through elements with the project class and call isInViewport on each.
	function projectInViewHandler(callback) {
		if (scrollCount <= 1) {
			// var projects = document.getElementsByClassName('project');	
			var projects = document.querySelectorAll('.project');	
			for (var i = 0; i < projects.length; i++) {
				if(isInViewport(projects[i])) {
					addJSInViewClass(projects[i]);
				} else {
					removeJSInViewClass(projects[i]);
				}
			};
			callback();
		}
	}

	//Function to check if any part of the the passed in element is in the viewport;  
	function isInViewport(element) {
		var rect = element.getBoundingClientRect();
		var html = document.documentElement;
		
		return (
			//if the distance of the top of the element from the top of the viewport is >= 0 and 
			rect.top >= (0 - (rect.height*0.66)) &&
			//if the distance of the left of the element from the left of the viewport is >= 0 and  
			rect.left >= 0 &&
			//the distance from the bottom of the element from the top of the viewport <= the height of the viewport or the height of the html doc
			// rect.top < (window.innerHeight || html.clientHeight) &&
			rect.bottom <= (window.innerHeight + (rect.height*0.66)) &&
			//the distance from the bottom of the element from the top of the viewport <= the height of the viewport or the height of the html doc		
			rect.left < (window.innerWidth || html.clientWidth)
		);
	}

	//Functiont to toggle the jsinview class on the passed in element  
	function addJSInViewClass(element) {
		if (element.className.search('jsinview') < 0 ) {
			element.classList.add('jsinview');
		}

	}

	function removeJSInViewClass(element) {
		if (element.className.search('jsinview') >= 0 ) {
			element.classList.remove('jsinview');
		}

	}

	function resetScrollCount() {
		scrollCount = 0;
	}	

	var ua = navigator.userAgent.toLowerCase();
	var mobileOSs = {
		android: ua.indexOf("android"),
		ipad: ua.indexOf("ipad"),
		iphone: ua.indexOf("iphone"),
		windowsPhone: ua.indexOf("windows phone")
	}


	function returnMobileOs() {
		for (keys in mobileOSs) {
			if (mobileOSs[keys] > -1) {
				return keys;
			}
		}
	}

	function displayUserAgentString() {
		var p = document.createElement('p');
		var body = document.querySelector('body');
		p.textContent = ua;
		body.appendChild(p);
	}

	function ifMobileOS() {
		if (returnMobileOs() !== undefined) {
			//If so calls removeAnimClass();
			removeAnimClass()
			window.addEventListener('scroll',function(event) {
				scrollCount++;
				projectInViewHandler(function() {
					resetScrollCount();
				});
			});				
		} else {
			// Otherwise transitions in prehiden elements as per fadeAndTransition()
			fadeInAndTransition();
			//And adds event handler on scroll to check if further elements with the anim class are visibe in the viewport
			// and transitions them in with fadeAndTransition()  
			$(window).on("scroll",function() {
				fadeInAndTransition()
			});
		}
	}

	ifMobileOS();

};

$(document).ready(main);


