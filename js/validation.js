function validateEmail(sEmail) {

	var email = jQuery(sEmail).val().trim();

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!filter.test(email)) {
    	jQuery(sEmail).addClass("error");
    	jQuery(sEmail).after(jQuery("<label id='emailerror' class='errortext'>This isn't a valid Email Address. </label>"));

    	return 1;
    } else{
		return 0;
	}
}

function validatePhone(sPhone){

	var phone  = jQuery(sPhone).val().trim(); 

	var filter = /^\d{9}$/

	if (!filter.test(phone)) {
		jQuery(sPhone).addClass("error");
		jQuery(sPhone).after(jQuery("<label id='contactphonerror' class='errortext'>The format of this number is not recognized. Check the number. </label>"));

		return 1;
	} else{
		return 0;
	}
}

function validatePin(sPin){

	var pin = jQuery(sPin).val().trim();
	var filter = /^\d{4}$/;

	if (!filter.test(pin)) {

		jQuery(sPin).addClass("error");
		jQuery(sPin).after(jQuery("<label id='pinerror' class='errortext'>The PIN must be numerical and has 4 digits. </label>"));
		return 1;
	} else{
		return 0;	
	}
}

function validatePassword(sPass){

	var pass = jQuery(sPass).val();

	var filter0 = /[A-Z]/;
	var filter1 = /[a-z]/;
	var filter2 = /\d/;
	var filter3 = /\s/;

	if (filter0.test(pass) && filter1.test(pass) && filter2.test(pass) && !filter3.test(pass) && pass.length >= 5) {
		return 0;
	} else {
		jQuery(sPass).addClass("error");
		jQuery(sPass).after(jQuery("<label id='passerror' class='errortext'>The password must has 5 characters or more, one uppercase letter, one lowercase letter and one number. </label>"));
		return 1;
	}
}

function validateVPassword(sVPass){

	var vpass = jQuery(sVPass).val().trim();
	var pass = jQuery("#password").val().trim();

	if (vpass != pass) {

		jQuery(sVPass).addClass("error");
		jQuery(sVPass).after(jQuery("<label id='vpasserror' class='errortext'>The passwords do not match. Do you want to retry? </label>"));
		return 1;

	} else{
		return 0;
	}
}

function validateEmpty(component){

	if(jQuery(component).val().trim().length == 0){

		jQuery(component).addClass("error");
	
		jQuery(component).after(jQuery("<label id='emptyerror' class='errortext'>This field can't be empty. </label>"));

		return false;
	} else{
		return true;
	}
}

function validateBirthDateDay(sDay , month, year){

	var day = jQuery(sDay).val();

	dayint = parseInt(day);

	var daysinmonth = daysInMonth(month, year);

	var filter = /^\d{2}$/;

	if (day.length == 1) {
		day = "0"+ day;
	}

	if (dayint >= daysinmonth && dayint >= 1 && filter.test(day)){

		jQuery(sDay).addClass("error");	
		jQuery(sDay).after(jQuery("<label id='dayerror' class='errortext'>It seems that the selected day is incorrect. Be sure to use a two-digit number that corresponds to one day of the month. </label>"));

		return 1;
	} else {
		return 0;
	}
}

function validateBirthDateYear(sYear){

	var year = jQuery(sYear).val();
	var yearint = parseInt(year);

	var d = new Date();
	var actualyear = d.getFullYear();

	var minyear = actualyear - 14;
	var maxyear = actualyear - 120;

	var filter = /^\d{4}$/;

	if(yearint > minyear || yearint < maxyear && filter.test(year)){
		jQuery(sYear).addClass("error");	
		jQuery(sYear).after(jQuery("<label id='yearerror' class='errortext'>It appears that the date is not correct. Be sure to enter your actual date of birth. </label>"));
		return 1;
	} else{
		return 0;
	}
}