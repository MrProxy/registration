
jQuery(document).ready(function(){

	jQuery("#telephoneNumber").intlTelInput();
	jQuery("#country").countrySelect();

	jQuery(".userinfo").focusin(function(){
		jQuery(next).nextAll("label").remove();
		jQuery(this).removeClass("error");
	});

	jQuery("input.userinfo").focusout(function(){
		validateEmpty(this);
	});

	jQuery("#pin").focusout(function(){
		validatePin(this);
	});

	jQuery("#password").focusout(function(){
		validatePassword(this);
	});

	jQuery("#vpass").focusout(function(){
		validateVPassword(this);
	});

	jQuery("#country").focusin(function(){
		var countrycode = jQuery(this).countrySelect("getSelectedCountryData")["iso2"];
		jQuery("#telephoneNumber").intlTelInput("selectCountry", countrycode);
	});

	jQuery("#telephoneNumber").focusout(function(){
		validatePhone(this);
	});

	jQuery("#contactphone").focusout(function(){
		validatePhone(this);
	});

	jQuery("#userName").focusout(function(){
		validateEmail(this);
	});

	jQuery("#create").click(function(){

		createUser(jQuery);

	});
});

function createUser(){

	jQuery(".errortext").remove();

	var error = 0;

	var inputs = jQuery("input.userinfo");

	var userinfo = {};

	error = error + validatePhone(jQuery("#telephoneNumber"));
	error = error + validatePhone(jQuery("#contactphone"));
	error = error + validateEmail(jQuery("#userName"));
	error = error + validatePin(jQuery("#pin"));
	error = error + validatePassword(jQuery("#password"));
	error = error + validateVPassword("#vpass");
	error = error + validateBirthDateDay("#birthdateday");
	error = error + validateBirthDateYear("#birthdateyear");

	inputs.each(function() {

		var verification = validateEmpty(this);

		if (verification) {

			userinfo[this.id] = jQuery(this).val();

		} else {
			error = error+1;
		}
	});

	var selectors = jQuery("select.userinfo");

	selectors.each(function() {

		if (jQuery(this).val() != null) {

			jQuery(this).removeClass("error");
			userinfo[this.id] = jQuery(this).val().trim();

		} else {

			jQuery(this).addClass("error");

			error = error+1;
		}
	});

	if (error == 0 ) {

		userinfo["birthdate"] = parseBirthDate(userinfo["birthdateday"],userinfo["birthdatemonth"],userinfo["birthdateyear"]);
		userinfo["country"] = jQuery("#country").countrySelect("getSelectedCountryData")["iso2"];
		userinfo["prefix"] = jQuery("#telephoneNumber").intlTelInput("getSelectedCountryData")["dialCode"];
		userinfo["language"] = navigator.language;
		userinfo["acceptedterms"] = jQuery("#acceptedterms").val ? 1:0;

		delete userinfo["vpass"];
		delete userinfo["birthdateday"];
		delete userinfo["birthdateyear"];
		delete userinfo["birthdatemonth"];

		if (userinfo["acceptedterms"] == 1) {

	    	var basicservice = "http://srvs2.drsecurityapp.com/appservices/webservices/DRS_002_REGISTER.php";
			var fullservice = "http://srvs2.drsecurityapp.com/appservices/webservices/DRS_027_COMPLETE_REGISTER.php";

			console.log(userinfo);

	    	jQuery.post(fullservice,userinfo,

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
