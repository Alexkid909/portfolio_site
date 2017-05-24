function main () {

	//DOM cache
	var $slider = $('#slider');
	var $slideList = $slider.find('.slides');
	var $slide =  $slideList.find('.slide');
	var $sliderNav = $slider.find('.slider-nav');
	var $slideNavLeft = $sliderNav.find('#slider-left');
	var $slideNavRight = $sliderNav.find('#slider-right');
	var $directNav = $slider.find('.direct-nav');
	var $directNavButtons = $directNav.find('.direct-nav-buttons');

	//Defaults

	var currentSlide = 1;
	var running = false;
	var runCounter = 0;
	var numOfSlides = $slide.length;
	var autoDirection = 'left';
	var autoSlideOnLoad = false;
	var autoSlideInterval = 2000;

	//Running Config
	
	var nextDirection;
	var currentDirection = 'none';


	//Config

	var sliderHorizPercentage = 80;
	var sliderVertPercentage = 80;
	var directNavButtonsSizePercentage = 2;
	var showLeftRightNav = true;
	var showDirectNav = true;
	var slideAxis = 'x';
	var animProperties = {
		
	};
	var animDuration = 800;
	var animOptions = {
		duration: animDuration,
		easing: 'linear',
		start: function () {			
				if (nextDirection == 'left') {
					currentSlide--;
				} else {
					currentSlide++;
				};
		},
		complete: function() {
				decRunCounter();
				autoSlide();
				controller();
		}
	};


	// Sizing

	var sliderWidth;
	var sliderHeight;
	var directNavButtonSize;
	var slideListWidth;
	var slideWidth;
	var slideHeight;
	var $window = $(window);

	var sizing = function() {
		
		sliderWidth = sliderHorizPercentage+"%";
		sliderHeight = sliderVertPercentage+"%";
		slideListWidth = numOfSlides * 100+"%";
		slideWidth = 100 / numOfSlides+"%";
		slideHeight = "100%";
		directNavButtonSize = (slideWidth /100) *directNavButtonsSizePercentage
		$slide.css({"width":slideWidth}).css({"height":slideHeight});
		$slider.css({"width":sliderWidth}).css({"height":sliderHeight});
		$slideList.css({"width":slideListWidth});
		$directNavButton.css({"height":directNavButtonSize,"width":directNavButtonSize})
	};







	//Nav Functions

		// Incremental Nav

			var slide = function() {	
				var translateXVal = parseFloat($('.slides').css("transform").split(',')[4]);
				var slideCalcWidth = $slide.width();
				animProperties.setTranslateX = function() {
					var TranslateXOperator = function() {
						switch(nextDirection) {
							case 'left':
									return "+";
									break;
							case 'right':
									return "-";
							default:
						};
					};
					animProperties["x"] = translateXVal+parseFloat(TranslateXOperator()+slideCalcWidth);
				};
				setSlideNum(setActiveBtn);
				animProperties.setTranslateX();
				$slideList.transition(animProperties,animOptions);
			};

			var setSlideNum = function(callback) {
				if (nextDirection == 'left') {
					currentSlide--;
				} else {
					currentSlide++;
				};
				callback(currentSlide);
			};

			var lastSlide = function(callback) {

				if (currentSlide == $slide.length) {
					$slideList.css({x:0});
					currentSlide = 1;
				};
				callback();

			};

			var firstSlide = function(callback) {
				if (currentSlide == 1) {
					$slideList.css({x:-((numOfSlides-1)*sliderWidth)});
					currentSlide = numOfSlides;
				};
				callback();
			};

			var controller = function() {
					if (runCounter < 1) {
						running = false;
						nextDirection = 'none';
						currentDirection = 'none';
					} else {
						running = true;

						currentDirection = nextDirection;
						switch(nextDirection) {
							case 'left':
								firstSlide(slide);
								break;
							default:
								lastSlide(slide);
						};
					};			
					callback = function() {
					};
					callback();
				};


			var onClick = function(clickDirection) {
				nextDirection = clickDirection;
				if (currentDirection == nextDirection || currentDirection == 'none') {
					incRunCounter();
				} else {
					setRunCounter(2);
				};
				if (running == false) {
					controller();
				};
			};

		// Direct Nav


			var showSlideN = function(n) {
				sliderCalcWidth = $slider.width();
				if (n == currentSlide) {
					return false
				} else {
					var slideShift = (n-currentSlide);
					if (n > currentSlide) {
						animOptions.duration = slideShift*animOptions.duration;
					} else {
						animOptions.duration = -(slideShift*animOptions.duration);				
					};
					animProperties["x"] = "-="+(slideShift*sliderCalcWidth);
					$slideList.transition(animProperties,animOptions);
						currentSlide = (n)
					animOptions.duration = animDuration;
				};
			};

			var setActiveBtn = function(btnNum) {
				if(btnNum == numOfSlides) {
					btnNum = 1
				};
				var $directNavBtn = $($directNavButtons.find('.direct-nav-button'));

				var activeBtn = $($directNavButtons.find('.direct-nav-button')[btnNum-1]);

				$directNavButton.removeClass("dnav-btn-active").addClass("dnav-btn-inactive");
				activeBtn.removeClass("dnav-btn-inactive").addClass("dnav-btn-active");
			}


		// Shared Functions

			var setRunCounter = function(n) {
				runCounter = n;
			};

			var incRunCounter = function() {
					if (runCounter < 5) {
						runCounter++;
					};
				};

			var decRunCounter = function() {
				if (runCounter > 0) {
					runCounter--;
				};
			};

			// Automation

			var autoSlide = function() {
				if (autoSlideOnLoad == true) {
						setTimeout(function() {
							onClick(autoDirection);
					},autoSlideInterval)};
				};

//Nav Events

	$slideNavLeft.click(function() {
		onClick('left');
	});

	$slideNavRight.click(function() {
		onClick('right');
	});

	$directNavButtons.on('click',"li",function() {
			var $this = $(this)
			var thisThumb = $this.closest('li').index()+1;
			showSlideN(thisThumb);
			setActiveBtn(thisThumb,$this);

		});	

	
//Display Nav

	if (showLeftRightNav == false) {
	 	$sliderNav.css({"display":"none"});
	 };

	if (showDirectNav == false) {
	 	$directNavButtons.css({"display":"none"});
	 };

	var createHtml = function(text) {
  		return '<li class="direct-nav-button dnav-btn-inactive" id="button'+text+'"></li>';
	};

	var createDirectNav = function() {
		for (i = 1;i < numOfSlides; ++i) {
			var html = createHtml(i);
			$directNavButtons.append(html);
		};
		$directNavButton = $directNavButtons.find('.direct-nav-button'); 
		var activeBtn = $($directNavButtons.find('.direct-nav-button')[0]);
		activeBtn.removeClass("dnav-btn-inactive").addClass("dnav-btn-active");
	};

	 createDirectNav();
	 sizing();
	 autoSlide();

};



$('document').ready(main)