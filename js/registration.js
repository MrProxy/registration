
jQuery(document).ready(function($){

	$("#telephoneNumber").intlTelInput();
	$("#country").countrySelect();

	$(".userinfo").focusin(function(){

		var parent = $(this).parent(".field").get(0);

		$(parent).nextAll("p").remove();
		$(this).removeClass("error");

	});

	$("input.userinfo").focusout(function(){
		validateEmpty(this);
	});

	$("#pin").focusout(function(){
		validatePin(pin);
	});

	$("#password").focusout(function(){
		validatePassword(this);
	});

	$("#vpass").focusout(function(){
		validateVPassword(this);
	});

	$("#country").focusin(function(){
		var countrycode = $(this).countrySelect("getSelectedCountryData")["iso2"];
		$("#telephoneNumber").intlTelInput("selectCountry", countrycode);
	});

	$("#telephoneNumber").focusout(function(){
		validatePhone(this);
	});

	$("#contactphone").focusout(function(){
		validatePhone(this);
	});

	$("#userName").focusout(function(){
		validateEmail(this);
	});

	$("#create").click(function(){

		createUser();

	});
});

function createUser(){

	$(".errortext").remove();

	var error = 0;

	var inputs = $("input.userinfo");

	var userinfo = {};

	error = error + validatePhone($("#telephoneNumber"));
	error = error + validatePhone($("#contactphone"));
	error = error + validateEmail($("#userName"));
	error = error + validatePin($("#pin"));
	error = error + validatePassword($("#password"));
	error = error + validateVPassword("#vpass");
	error = error + validateBirthDateDay("#birthdateday");
	error = error + validateBirthDateYear("#birthdateyear");

	inputs.each(function() {

		var verification = validateEmpty(this);

		if (verification) {

			userinfo[this.id] = $(this).val();

		} else {
			error = error+1;
		}
	});

	var selectors = $("select.userinfo");

	selectors.each(function() {

		if ($(this).val() != null) {

			$(this).removeClass("error");
			userinfo[this.id] = $(this).val().trim();

		} else {

			$(this).addClass("error");

			error = error+1;
		}
	});

	if (error == 0 ) {

		userinfo["birthdate"] = parseBirthDate(userinfo["birthdateday"],userinfo["birthdatemonth"],userinfo["birthdateyear"]);
		userinfo["country"] = $("#country").countrySelect("getSelectedCountryData")["iso2"];
		userinfo["prefix"] = $("#telephoneNumber").intlTelInput("getSelectedCountryData")["dialCode"];
		userinfo["language"] = navigator.language;
		userinfo["acceptedterms"] = $("#acceptedterms").val ? 1:0;

		delete userinfo["vpass"];
		delete userinfo["birthdateday"];
		delete userinfo["birthdateyear"];
		delete userinfo["birthdatemonth"];

		if (userinfo["acceptedterms"] == 1) {

	    	var basicservice = "http://srvs2.drsecurityapp.com/appservices/webservices/DRS_002_REGISTER.php";
			var fullservice = "http://srvs2.drsecurityapp.com/appservices/webservices/DRS_027_COMPLETE_REGISTER.php";

	    	$.post(fullservice,userinfo,

				function(data, status){
			    	if(data["WebOnly"] == "Success" && data["errorCode"] == 0){
			    		alert("The user has been registered successfully");
			    		location.reload();
			    	}else{
			    		alert("ERROR: " + data["errorMessage"]);
			    	}
				}
			);
		};
	}
}
