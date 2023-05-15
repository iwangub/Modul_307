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
	jQuery.validator.addMethod("regex_namen", function (value, element) {
		return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	}, "Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.regex_namen = { regex_namen: true };
	/////////////////////


	/////////////////////
	// Regex for PLZ //
	jQuery.validator.addMethod("regex_plz", function (value, element) {
		return this.optional(element) || /^([0-9\s\(\)\+\-\/]{4,5})*$/.test(value);
	}, "Nur Zahlen angeben!")
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

	//// Login validation ////
	$("#formLogin").validate({

		rules: {

			username: {
				required: true,
				regex_namen: true,
				minlength: 3,
				remote: {
					url: "php/user.php",
					type: "post"
				}
			},
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

			username: {
				required: "Benutzername angeben!",
				minlength: "Mindestens 3 Zeichen!",
				remote: "Benutzername existiert bereis!"
			},
			passwd: {
				required: "Passwort angeben!"
			}
		},

		submitHandler: function (form) {
			window.location.href = "success.html";
			form.submit();
		}
	});
	//// Login validation DONE ////



	//// Sign Up validation ////
	$("#formSignUp").validate({

		rules: {

			gender: {
				required: true
			},

			username: {
				required: true,
				regex_namen: true,
				minlength: 3,
				remote: {
					url: "../php/user.php",
					type: "post"
				}
			},

			vname: {
				required: true
			},

			nname: {
				required: true
			},

			adresse: {
				required: true
			},

			email: {
				required: true,
				regex_email: true
			},

			plz: {
				required: true
			},

			phone: {
				required: true
			},

			password: {
				required: true
			},
			confirmPassword: {
				required: true,
				equalTo: "#password"

			}
		},

		success: function (element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		},

		messages: {

			gender: {
				required: "Anrede angeben!"
			},

			username: {
				required: "Benutzername angeben!",
				minlength: "Mindestens 3 Zeichen!",
				remote: "Benutzername existiert bereis!"
			},
			vname: {
				required: "Vornamen angeben!"
			},
			nname: {
				required: "Nachnamen angeben!"
			},
			adresse: {
				required: "Adresse angeben!"
			},

			email: {
				required: "Email angeben!",
				regex_email: "Gültige Email Adresse angeben!"
			},
			plz: {
				required: "PLZ anegeben!"
			},
			phone: {
				required: "Telefon angeben!"
			},

			password: {
				required: "Passwort angeben!"
			},

			confirmPassword: {
				required: "Passwort bestätigen!",
				equalTo: "Passwort muss übereinstimmen!"
			}
		},

		submitHandler: function (form) {
			window.location.href = "success.html";
			form.submit();
		}
	});
	//// Sign Up validation DONE ////
});
