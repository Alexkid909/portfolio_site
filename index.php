<!DOCTYPE html>
	<html>
		<head>
			<title>Alex Robinson - Portfolio</title>
			<link type="text/css" rel="stylesheet" href="css/bootstrap-3.3.6-dist/css/bootstrap.min.css">			
			<link type="text/css" rel="stylesheet" href="css/style.css">
			<link href="https://fonts.googleapis.com/css?family=Rajdhani|Raleway" rel="stylesheet">
			<script src="js/vendor/jquery-3.1.1.min.js"></script>
			<script src="js/vendor/angular.min.js"></script>
			<script src="js/vendor/angular-sanitize.min.js"></script>
			<script src="js/app.js"></script>
<!-- 			<script src="http://192.168.1.244:8080/target/target-script-min.js#anonymous"></script> -->
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta property="og:site_name" content="Alex Robinson - Portfolio"/>
			<meta property="og:title" content="Alex Robinson - Front-end Web Developer - Portfolio."/>
			<meta property="og:description" content="Hi! I'm Alex, a front end web developer based in Newcastle upon Tyne, UK.  Welcome to my portfolio site where you can findo out more about me and take a look at the projects I've worked on."/>
			<meta name="description" content="Hi! I'm Alex, a front end web developer based in Newcastle upon Tyne, UK.  Welcome to my portfolio site where you can findo out more about me and take a look at the projects I've worked on."/>			
			<meta property="og:image" content="http://www.alexkid.me/images/preview.png">
			<meta property="og:url" content="http://www.alexkid.me">
			<meta property="og:type" content="website"/>			
			<script>
			  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-90406467-1', 'auto');
			  ga('send', 'pageview');

			</script>

		</head>

		<body ng-app="Portfolio">
			<div id="nav-container">
				<div id="nav-icons">
					<ul id="to-home" class="nav pull-left nav-img-container">
						<li id="to-top">
							<a class="main-nav-btn" href="#splash-header">
								<img class="nav-img" src="images/web-page-home.png">
							</a>
						</li>
					</ul>
					<ul id="mobile-nav" class="nav pull-right nav-img-container">
						<li>
							<a class="main-nav-btn">
								<img class="nav-img" src="images/hamburger_menu.png">
							</a>
						</li>
					</ul>					
				</div>
				<div id="main-nav">
					<ul class="nav">
						<li id="to-work"><a class="main-nav-btn" href="#work-content">work</a></li>
						<li id="to-projects"><a class="main-nav-btn" href="#projects-content-1">projects</a></li>
						<li id="to-me"><a class="main-nav-btn" href="#me-content">me</a></li>
					</ul>
				</div>
			</div>
			<splash></splash>
			<div class="main" id="splash">
				<div class="section content" id="work-content">
					<div class="container">
						<div class="row">
							<div class="col-lg-6 col-sm-10 col-lg-offset-3 col-sm-offset-1">
								<div class="text-container">
									<p>I'm a Front-end web developer and a designer.  I have a wide range of skills including HTML5 & CSS3, Bootstrap, Sass, JavaScript, jQuery and AngularJS, and have extensive experience working with Scrum teams as Product Owner. </p> 
									<p>I also have a working knowledge of IT Networking (CCNA), I'm an ISEB accredited foundation level tester and a MOS certified Expert in MS Excel.
									</p> 
									<p>I'm available for freelance work and would love to hear about your project. So please get in touch! 
									</p> 
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="section content" id="projects-content-1">
					<div class="container">
						<div class="row">
							<div class="col-lg-6 col-sm-10 col-lg-offset-3 col-sm-offset-1">
								<div class="text-container">
									<p>Here is a selection of recent projects I've worked on.  If you'd like more information about any of my work, please get in touch.  Or why not take a look at my code on <a href="https://github.com/Alexkid909" target="_blank">GitHub</a> or <a target="_blank" href="https://www.codewars.com/users/alexkid9091">Codewars.com</a>.</p> 
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="projects-container">
					<div class="vertical-banner">
						<ul id="dev-logo-banner">
							<li id="html5"><img class="dev_logo" src="images/html5-white.png"></li>	
							<li id="css3"><img class="dev_logo" src="images/css3-logo-white.png"></li>	
							<li id="bootstrap"><img class="dev_logo" src="images/bootstrap-logo-white.png"></li>
							<li id="js"><img class="dev_logo" src="images/javascript-logo-white.png"></li>
							<li id="jquery"><img class="dev_logo" src="images/jquery-white.png"></li>
							<li id="angularjs"><img class="dev_logo" src="images/AngularJS.png"></li>
							<li id="sass"><img class="dev_logo" src="images/sass.png"></li>
							<li id="all">All</li>
						</ul>
					</div>

					<projects></projects>
				</div>


				<div class="section content" id="me-content">
					<div class="container">
						<div class="row">
							<div class="col-lg-6 col-sm-10 col-lg-offset-3 col-sm-offset-1">
								<div class="text-container">
									<p>I'm a bit of an all round geek and I'm inspired by how tech can be used to make people's lives better.</p>
									<p>When I'm not coding, gaming or being run ragged by my two young kids you'll probably find me watching scifi / Game of Thrones / mob films / cooking / camping / watching footy / or trying to find time to eat / sleep / breathe...</p>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div id="splash-footer" class="section footer">
					<dir class="container">
						<div class="row">
							<div class="col-sm-3 smart-phone-full-width">
								<a href="https://www.facebook.com/alexkid909" target="_blank">
									<img class="sm-logo" src="images/facebook.png">
									<p>
										Follow me on facebook.
									</p>
								</a>
							</div>
							<div class="col-sm-3 smart-phone-full-width">
								<a href="https://uk.linkedin.com/pub/alex-robinson/13/2a1/990" target="_blank">
									<img class="sm-logo" src="images/linkedin.png">
									<p>
										Connect with me on Linkedin.
									</p>
								</a>
							</div>
							<div class="col-sm-3 smart-phone-full-width">
								<a href="https://twitter.com/alexkid909" target="_blank">
									<img class="sm-logo" src="images/twitter.png">
									<p>
										Follow me on Twitter.
									</p>
								</a>
							</div>
							<div class="col-sm-3 smart-phone-full-width">
								<a href="https://github.com/Alexkid909" target="_blank">
									<img class="sm-logo" src="images/github.png">
									<p>
										See my projects on GitHub.
									</p>
								</a>
							</div>							
							<div class="col-sm-4 smart-phone-full-width">
								<a href="mailto:alex.robinson578@gmail.com">
									<img class="sm-logo" src="images/email.png">
									<p>Send me an email.</p>
								</a>
							</div>
							<div class="col-sm-4 smart-phone-full-width">
								<a href="skype:alexkid9090?chat">
									<img class="sm-logo" src="images/skype.png">
									<p>Skype me.</p>
								</a>
							</div>
							<div class="col-sm-4 smart-phone-full-width">
								<a href="https://m.me/alexkid909" target="_blank">
									<img class="sm-logo" src="images/messenger.png">
									<p>Send me a message.</p>
								</a>
							</div>
						</div>

					</dir>
				    <div id="contact-form" class="container">
				        <div class="row">
				            <form class="form-horizontal" id="ajax-contact" method="post" action="mailer.php">    
				                <div class="form-group">
				                    <label class="col-sm-2 smart-phone-full-width control-label" for="name">Your Name:</label>
				                    <div class="col-sm-8 smart-phone-full-width">
				                        <input class="form-control" type="text" id="name" name="name" value="" required>
				                    </div>
				                </div>

				                <div class="form-group">
				                    <label class="col-sm-2 smart-phone-full-width control-label" for="email">Your Email:</label>
				                    <div class="col-sm-8 smart-phone-full-width">
				                        <input class="form-control" type="email" id="email" name="email" value="" required>
				                    </div>
				                </div>

				                <div class="form-group">
				                    <label class="col-sm-2 smart-phone-full-width control-label" for="message">Message:</label>
				                    <div class="col-sm-8 smart-phone-full-width">
				                        <textarea class="form-control" id="message" name="message" rows="8" required></textarea>
				                    </div>
				                </div>
				                <div class="form-group">
				                    <div class="col-sm-12 smart-phone-full-width">
				                        <button class="btn btn-primary" type="submit">Send</button>
				                    </div>
				                </div>
				            </form>
				            <div class="col-sm-8 col-sm-offset-2 smart-phone-full-width" id="form-messages">   
				            </div>
				        </div>            
				    </div>
				</div>
			</div>
			
			<!-- AngularJS Modules -->

			<script src="js/modules/portfolio.js"></script>

			<!-- AngularJS Controllers -->

			<script src="js/controllers/projectsCtrl.js"></script>
			<script src="js/controllers/projectTileCtrl.js"></script>			
			<script src="js/controllers/splashCtrl.js"></script>

			<!-- AngularJS Directives  -->

			<script src="js/directives/project-tile.js"></script>
			<script src="js/directives/projects.js"></script>
			<script src="js/directives/splash.js"></script>

			<!-- AngularJS Services  -->

			<script src="js/services/projects.js"></script>
			<script src="js/services/sharedScope.js"></script>

			<!-- Vanilla JS Scripts -->

			<script type="text/javascript">
				// Slides out mobile nav from the right
				const mobileNavBtn = document.querySelector('#mobile-nav a');
				const mainNav = document.querySelector('#main-nav');
				const iconNav = document.querySelector('#nav-icons');
				const navItems = document.querySelectorAll('#main-nav li, #nav-icons #to-home li');
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

			</script>

			<script type="text/javascript">

				//Sets Project Filter Bar to correct height

				function setVerticalBannerHeight() {
					a = document.getElementById('projects-container');
					aH = a.offsetHeight;
					b = document.getElementsByClassName("vertical-banner")[0];
					b.style.height = aH+"px"
				}

				setVerticalBannerHeight()

			</script>
			<script type="text/javascript">  // Transitions in project vertical nav bar on hover over projects.

				var projNavBarVisible = false;

				a = document.getElementsByClassName('vertical-banner')[0];

				function removeAnimSetTransX0() {
							a.style.transform = "translateX(0)";
							a.style.animation = "";
							projNavBarVisible = true;
							a.removeEventListener("animationend",removeAnimSetTransX0);
				}

				function slideOutVerticalBanner(callback) {
					a.addEventListener("animationend",removeAnimSetTransX100);
					a.style.animation = "SlideLeft 200ms ease-in 1s 1 reverse both";
				}

				function removeAnimSetTransX100() {
							a.style.transform = "translateX(100%)";
							a.style.animation = "";
							projNavBarVisible = false;
							a.removeEventListener("animationend",removeAnimSetTransX100);
				}

				function slideInVerticalBanner(callback) {
					a.addEventListener("animationend",removeAnimSetTransX0);
					a.style.animation = "SlideLeft 200ms ease-in 1s 1 normal both";
				}

				function toggleProjectsNav(e) {
					if (projNavBarVisible && (e.type == "mouseleave")) {
						slideOutVerticalBanner();
					} else if ((projNavBarVisible == false) && (e.type == "mouseover")) {
						slideInVerticalBanner();
					} else {
						return false
					};
				};

				x = document.getElementById('projects-container');
				x.addEventListener("mouseover",toggleProjectsNav);
				x.addEventListener("mouseleave",toggleProjectsNav);
		
			</script>

			<script type="text/javascript">
			var language;
			var devLogoBanner = document.getElementById('dev-logo-banner');
			var projects = document.querySelectorAll('.project');




			function removeProjectsFilter() {
				var greyedoutProjects = document.querySelectorAll('.project.greyout')
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

			function projectFilterHandler(event) {
				language = event.target.id;
				removeProjectsFilter();
				if (language === 'all') {
					return false
				} else {
					language = event.target.parentElement.id;					
					filterProjects(language);
				};
			};

			devLogoBanner.addEventListener('click',function(event) {
				projectFilterHandler(event,filterProjects);
			});

			</script>
		</body>
	</html>
