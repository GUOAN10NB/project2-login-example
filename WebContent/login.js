
function handleLoginResult(resultDataString) {
	resultDataJson = JSON.parse(resultDataString);
	
	console.log("handle login response");
	console.log(resultDataJson);
	console.log(resultDataJson["status"]);

	// if login success, redirect to index.html page
	if (resultDataJson["status"] == "success") {
		window.location.replace("/project2-login-example/index.html");
	} else {
		console.log("show error message");
		console.log(resultDataJson["message"]);
//		jQuery("#login_error_message").text("message");
		jQuery("#login_error_message").text(resultDataJson["message"]);
	}
}


function submitLoginForm() {
	console.log("submit login form");
	
	jQuery.post(
		"/project2-login-example/Login", 
		jQuery("#login_form").serialize(),
		(resultDataString) => handleLoginResult(resultDataString));
}