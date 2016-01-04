jQuery(document).ready(function($){

	$("#create").click(function(){

		console.log("Creating new user");

		var errors = 0;

		var user = $("#user").val();
		console.log(user);

		var pass = $("#pass").val();
		console.log(pass);

		var name = $("#name").val();
		console.log(name);

		var surname = $("#surname").val();
		console.log(surname);

		var pin = $("#pin").val();
		console.log(pin.length);

		var lang = navigator.language;
		console.log(lang);

		var gender = $("#gender").val();
		console.log(gender);

		var birthdate = $("#birthdate").val();
		console.log(birthdate);

		var country = $("#country").val();
		console.log(country);

		var prefix = $("#prefix").val();
		console.log(prefix);

		var telephoneNumber = $("#telephoneNumber").val();
		console.log(telephoneNumber);

		var contactname = $("#contactname").val();
		console.log(contactname);

		var contactphone = $("#contactphone").val();
		console.log(contactphone);

		var contactlink = $("#contactlink").val();
		console.log(contactlink);

		var securityquestion = $("#securityquestion").val();
		console.log(securityquestion);

		var securityanswer = $("#securityanswer").val();
		console.log(securityanswer);

		var acceptedterms = $("#acceptedterms").val;

		if (acceptedterms) {
			acceptedterms = 1;
		}else{
			acceptedterms = 0;
		}

		console.log(acceptedterms);

		if(user.length <= 0){
			$("#user").addClass("error");
			errors=errors+1;
		} else{
			$("#user").removeClass("error");
		}

		if(pass.length <= 0){
			$("#pass").addClass("error");
			errors=errors+1;
		} else{
			$("#pass").removeClass("error");
		}

		if(name.length <= 0){
			$("#name").addClass("error");
			errors=errors+1;
		} else{
			$("#name").removeClass("error");
		}

		if(surname.length <= 0){
			$("#surname").addClass("error");
			errors=errors+1;
		} else{
			$("#surname").removeClass("error");
		}

		if (pin.length > 4 || pin.length <= 0) {
			$("#pin").addClass("error");
			errors=errors+1;
		} else{
			$("#pin").removeClass("error");
		}

		if(gender.length <= 0){
			$("#gender").addClass("error");
			errors=errors+1;
		} else{
			$("#gender").removeClass("error");
		}

		if(birthdate.length <= 0){
			$("#birthdate").addClass("error");
			errors=errors+1;
		} else{
			$("#birthdate").removeClass("error");
		}

		if(country.length <= 0){
			$("#country").addClass("error");
			errors=errors+1;
		} else{
			$("#country").removeClass("error");
		}

		if(prefix.length <= 0){
			$("#prefix").addClass("error");
			errors=errors+1;
		} else{
			$("#prefix").removeClass("error");
		}

		if(telephoneNumber.length <= 0){
			$("#telephoneNumber").addClass("error");
			errors=errors+1;
		} else{
			$("#telephoneNumber").removeClass("error");
		}

		if(contactname.length <= 0){
			$("#contactname").addClass("error");
			errors=errors+1;
		} else{
			$("#contactname").removeClass("error");
		}

		if(contactphone.length <= 0){
			$("#contactphone").addClass("error");
			errors=errors+1;
		} else{
			$("#contactphone").removeClass("error");
		}

		if(contactlink.length <= 0){
			$("#contactlink").addClass("error");
			errors=errors+1;
		} else{
			$("#contactlink").removeClass("error");
		}

		if(securityquestion.length <= 0){
			$("#securityquestion").addClass("error");
			errors=errors+1;
		} else{
			$("#securityquestion").removeClass("error");
		}

		if(securityanswer.length <= 0){
			$("#securityanswer").addClass("error");
			errors=errors+1;
		} else{
			$("#securityanswer").removeClass("error");
		}

		

		if(errors == 0){

			if (!$("#conditions").prop("checked")) {

				var basicservice = "http://srvs2.drsecurityapp.com/appservices/webservices/DRS_002_REGISTER.php";
				var fullservice = "http://srvs2.drsecurityapp.com/appservices/webservices/DRS_027_COMPLETE_REGISTER.php";

				$.post(basicservice,
		    	{
		        	userName: user,
		        	password: pass,
		        	name: name,
		        	surname: surname,
		        	pin: pin,
		        	lang: lang
		    	},

		    	function(data, status){
		        	alert("Data: " + data + "\nStatus: " + status);
		        	location.reload();
		    	});
			}
		}
    });
});
