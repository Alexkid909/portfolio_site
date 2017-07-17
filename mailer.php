<?php

	//Only process POST requests
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		//Get the form fields and remove whitespace.
		$name = strip_tags(trim($_POST["name"]));
			$name = str_replace(array("\r","\n"),array(" "," "),$name);
		$email = filter_var(trim($_POST["email"]),FILTER_SANITIZE_EMAIL);
		$message = trim($_POST["message"]);

			//Check that data was sent to the mailer
			if (empty($name) OR empty($message) OR !filter_var($email,FILTER_VALIDATE_EMAIL)) {
				//Set 400 (bad request) response code
				http_response_code(400); 
				echo "Oops! You missed out some information or or the email address is not valid.";
				exit;
			}

			//Set the recipient email address.

			$recipient = "alex.robinson578@gmail.com";

			//Set the email subject
			$subject = "New contact from $name";

			//Build the email content
			$email_content = "Name: $name\n";
			$email_content .= "Email: $email\n\n";
			$email_content .= "Message:\n$message\n";

			//Build the email headers
			$email_headers = "From: website_mailer@alexkid.me";
			//"From: $name <$email>";

			//Send the mail
			if (mail($recipient,$subject,$email_content,$email_headers)) {
				//Set a 200 (okay) response code;
				http_response_code(200);
				echo "Thank you! Your message has been sent"; 
			} else {
				//Set a 500 (Internal server error) reponse code.
				http_response_code(500);
				echo "Oops! Something went wrong and we couldnt send your message.";
			}
		} else {
			//Not a POST request, set 403 (forbidden) response code.
			http_response_code(403);
			echo "There was a problem with your submission, please try again";
		}
?>