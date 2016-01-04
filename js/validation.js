function validateEmail(sEmail) {

	var email = $(sEmail).val().trim();
	var parent = $(sEmail).parent(".field").get(0);

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!filter.test(email)) {
    	$(sEmail).addClass("error");
    	$(parent).after($("<p id='emailerror' class='errortext'>This isn't a valid Email Address</p>"));

    	return 1;
    } else{
		return 0;
	}
}

function validatePhone(sPhone){

	var phone  = $(sPhone).val().trim(); 
	var parent = $(sPhone).parent(".field").get(0);

	var filter = /^\d{9}$/

	if (!filter.test(phone)) {
		$(sPhone).addClass("error");
		$(parent).after($("<p id='contactphonerror' class='errortext'>The format of this number is not recognized. Check the number.</p>"));

		return 1;
	} else{
		return 0;
	}
}

function validatePin(sPin){

	var pin = $(sPin).val().trim();
	var filter = /^\d{4}$/;

	var parent = $(sPin).parent(".field").get(0);

	if (!filter.test(pin)) {

		$(sPin).addClass("error");
		$(parent).after($("<p id='pinerror' class='errortext'>The PIN must be numerical and has 4 digits.</p>"));
		return 1;
	} else{
		return 0;	
	}
}

function validatePassword(sPass){

	var pass = $(sPass).val();

	var parent = $(sPass).parent(".field").get(0);

	var filter0 = /[A-Z]/;
	var filter1 = /[a-z]/;
	var filter2 = /\d/;
	var filter3 = /\s/;

	if (filter0.test(pass) && filter1.test(pass) && filter2.test(pass) && !filter3.test(pass) && pass.length >= 5) {
		return 0;
	} else {
		$(sPass).addClass("error");
		$(parent).after($("<p id='passerror' class='errortext'>The password must has 5 characters or more, one uppercase letter, one lowercase letter and one number.</p>"));
		return 1;
	}
}

function validateVPassword(sVPass){

	var vpass = $(sVPass).val().trim();
	var pass = $("#password").val().trim();

	var parent = $(sVPass).parent(".field").get(0);

	if (vpass != pass) {

		$(sVPass).addClass("error");
		$(parent).after($("<p id='vpasserror' class='errortext'>The passwords do not match . Do you want to retry?</p>"));
		return 1;

	} else{
		return 0;
	}
}

function validateEmpty(component){

	if($(component).val().trim().length == 0){

		var parent = $(component).parent(".field").get(0);

		$(component).addClass("error");
	
		$(parent).after($("<p id='emptyerror' class='errortext'>This field can't be empty</p>"));

		return false;
	} else{
		return true;
	}
}

function validateBirthDateDay(sDay , month, year){

	var day = $(sDay).val();

	dayint = parseInt(day);

	var daysinmonth = daysInMonth(month, year);

	var filter = /^\d{2}$/;

	if (day.length == 1) {
		day = "0"+ day;
	}

	if (dayint >= daysinmonth && dayint >= 1 && filter.test(day)){

		var parent = $(sDay).parent(".field").get(0);
		$(sDay).addClass("error");	
		$(parent).after($("<p id='dayerror' class='errortext'>It seems that the selected day is incorrect. Be sure to use a two-digit number that corresponds to one day of the month.</p>"));

		return 1;
	} else {
		return 0;
	}
}

function validateBirthDateYear(sYear){

	var year = $(sYear).val();
	var yearint = parseInt(year);

	var d = new Date();
	var actualyear = d.getFullYear();

	var minyear = actualyear - 14;
	var maxyear = actualyear - 120;

	var filter = /^\d{4}$/;

	if(yearint > minyear || yearint < maxyear && filter.test(year)){

		var parent = $(sYear).parent(".field").get(0);
		$(sYear).addClass("error");	
		$(parent).after($("<p id='yearerror' class='errortext'>It appears that the date is not correct. Be sure to enter your actual date of birth .</p>"));
		return 1;
	} else{
		return 0;
	}
}