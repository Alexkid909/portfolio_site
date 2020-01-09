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
			<meta property="og:image" content="http://www.alexkid.co.uk/images/preview.png">
			<meta property="og:url" content="http://www.alexkid.co.uk">
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
<!-- 			<div id="nav-container">
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
			</div> -->
			<nav></nav>
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
			<script src="js/directives/nav.js"></script>


			<!-- AngularJS Services  -->

			<script src="js/services/projects.js"></script>
			<script src="js/services/sharedScope.js"></script>

		</body>
	</html>
