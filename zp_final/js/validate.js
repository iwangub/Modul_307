$(document).ready(function () {
	/////////////////////
	// Scrolling Navbar //
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$(".navbar").addClass("navbar-scrolled");
		} else {
			$(".navbar").removeClass("navbar-scrolled");
		}
	});
	/////////////////////


	/////////////////////
	// Regex for names //
	jQuery.validator.addMethod("regex_name", function (value, element) {
		return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	}, "Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.regex_name = { regex_name: true };
	/////////////////////


	/////////////////////
	// Regex for PLZ //
	jQuery.validator.addMethod("regex_plz", function (value, element) {
		return this.optional(element) || /^([0-9\s\(\)\+\-\/]{4,5})*$/.test(value);
	}, "Postleitzahl?")
	jQuery.validator.classRuleSettings.regex_plz = { regex_plz: true };
	/////////////////////


	/////////////////////
	// Regex for E-Mail //
	jQuery.validator.addMethod("regex_email", function (value, element) {
		return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
	}, "Keine gültige Mail Adresse!")
	jQuery.validator.classRuleSettings.regex_email = { regex_email: true };
	/////////////////////


	/////////////////////
	// Regex for Birthdate //
	jQuery.validator.addMethod("regex_birth", function (value, element) {
		return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[0-1])[/., -](0?[1-9]|1[0-2])[/., -](19|20)?\d{2}$/.test(value);
	}, "Kein Datum?")
	jQuery.validator.classRuleSettings.regex_birth = { regex_birth: true };
	/////////////////////


	/////////////////////
	// Regex for Street //
	jQuery.validator.addMethod("regex_street", function (value, element) {
		return this.optional(element) || /^[a-zA-Z0-9 .,]+$/.test(value);
	}, "Geben Sie die Strasse ein und Nummer")
	jQuery.validator.classRuleSettings.regex_street = { regex_street: true };
	/////////////////////


	/////////////////////
	// Regex for phone //
	jQuery.validator.addMethod("regex_phone", function (value, element) {
		return this.optional(element) || /^[0-9+]+$/.test(value);
	}, "Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.regex_phone = { regex_phone: true };
	/////////////////////


	//// Login validation ////
	$("#formLogin").validate({
		rules: {
			// Rules for Username, required, regex, minlegth 3 and check php file for used usernames
			username: {
				required: true,
				regex_name: true,
				minlength: 3
			},
			// rules for passwd, required
			passwd: {
				required: true
			}
		},
		success: function (element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		},
		messages: {
			// message for username
			username: {
				required: "Benutzername angeben!",
				minlength: "Mindestens 3 Zeichen!",
				remote: "Benutzername nicht verfügbar!"
			},
			// message for passwd
			passwd: {
				required: "Passwort angeben!"
			}
		},
		// if it passes all conditions, the form will be submitted
		submitHandler: function (form) {
			let user = $('#username').val();
			let passwd = $('#passwd').val();
			if (user === 'admin' && passwd === 'SecureShell') {
				form.submit();
			} else {
				alert('Ungültiger Benutzername oder Passwort!');
			}
		}
	});
	//// Login validation DONE ////


	//// Sign Up validation ////
	$("#formSignUp").validate({
		rules: {
			// rule for gender, required
			gender: {
				required: true
			},
			// rule for username, required, regex, minlength 3 and check php file for used usernames
			username: {
				required: true,
				regex_name: true,
				minlength: 3,
				remote: {
					url: "../php/user.php",
					type: "post"
				}
			},
			// rule for name, requred, regex and minlength 2
			vname: {
				required: true,
				regex_name: true,
				minlength: 2
			},
			// rule for lastname, required, regex and minlegth 2
			nname: {
				required: true,
				regex_name: true,
				minlength: 2
			},
			// rule for address, required, regex and minlegth 2
			adresse: {
				required: true,
				regex_street: true,
				minlength: 2
			},
			// rule for email, required and email
			email: {
				required: true,
				regex_email: true
			},
			// rule for plz, required, regex and minlength 4
			plz: {
				required: true,
				regex_plz: true,
				minlength: 4
			},
			// rule for phone, required, regex, minlegth 10 and maxlength 20
			phone: {
				required: true,
				regex_phone: true,
				minlength: 10,
				maxlength: 20
			},
			// rule for passwd, required
			password: {
				required: true
			},
			// rule for confirm passwd, required and equalto the passwd above
			confirmPassword: {
				required: true,
				equalTo: "#password"
			},
			// rule for agb, required
			chk_agb: {
				required: true
			}
		},
		success: function (element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		},
		// all messages which do not fulfill the regex are described above in the functions
		messages: {
			// message for gender if not selected
			gender: {
				required: "Anrede angeben!"
			},
			// messages for username if blank, length or not matching to php file
			username: {
				required: "Benutzername angeben!",
				minlength: "Mindestens 3 Zeichen!",
				remote: "Benutzername existiert bereits!"
			},
			// messages for name if blank or too short
			vname: {
				required: "Vorname angeben!",
				minlength: "Mindestens 2 Zeichen!"
			},
			// messages for lastname if blank or too short
			nname: {
				required: "Nachname angeben!",
				minlength: "Mindestens 2 Zeichen!"
			},
			// messages for address if blank or too short
			adresse: {
				required: "Adresse angeben!",
				minlength: "Mindestens 2 Zeichen!"
			},
			// messages for email if blank or not matching regex
			email: {
				required: "Email angeben!",
				regex_email: "Gültige Email Adresse angeben!"
			},
			// messages for plz if blank or not matching regex
			plz: {
				required: "4 oder 5 stellige Zahl angeben!",
				regex_plz: "4 oder 5 stellige Zahl angeben!"
			},
			// messages for phone if blank or not matching length
			phone: {
				required: "Telefon angeben!",
				minlength: "Mindestens 10 Zeichen!",
				maxlength: "Maximal 20 Zeichen!",
			},
			// message for passwd if blank
			password: {
				required: "Passwort angeben!"
			},
			// message for confirmPasswd if blank or not matching the passwd above
			confirmPassword: {
				required: "Passwort bestätigen!",
				equalTo: "Passwort muss übereinstimmen!"
			},
			// message for agb if blank
			chk_agb: {
				required: "Bitte den AGB zustimmen!"
			}
		},
		// if it passes all conditions, the form will be submitted
		submitHandler: function (form) {
			form.submit();
		}
	});
	//// Sign Up validation DONE ////
});
