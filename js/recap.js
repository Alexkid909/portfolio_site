$(function() {

	function ajaxPost() {
		$.ajax({
		    type: 'POST',
		    url: "https://www.google.com/recaptcha/api/siteverify",
		    secret: "6LeSYhMUAAAAAI_qq_b1SX0lLqqRudoW-ZfP3w_S",
		    response: capResponse
		})
		.done(function(response) {
			var doneResponse = response;				
		})
		.fail(function(data) {
			var failData = data;
		});
	};

});