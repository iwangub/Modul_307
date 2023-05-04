$(document).ready(function () {
	//eigene Methoden einbauen 

	/////////////////////
	// nur Buchstaben und Nachname mind. 3 Zeichen
	// Regex für normale Namen //
	jQuery.validator.addMethod("regex_namen", function (value, element) {
		return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	}, "Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.namen = { namen: true };
	/////////////////////


	/////////////////////
	// Regex für Postleitzahl (4 oder 5stellig)
	// Regex für PLZ
	jQuery.validator.addMethod("regex_plz", function (value, element) {
		return this.optional(element) || /^[0-9]*$/.test(value);
	}, "Nur Zahlen angeben!")
	jQuery.validator.classRuleSettings.regex_plz = { regex_plz: true };
	/////////////////////


	/////////////////////
	// Regex für E-Mails @ Zeichen und mind 2 Stellen bei der top level domain
	// Regex für E-Mail
	jQuery.validator.addMethod("regex_email", function (value, element) {
		return this.optional(element) || /^[A-Za-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
	}, "Keine gültige Mail Adresse!")
	jQuery.validator.classRuleSettings.regex_email = { regex_email: true };
	/////////////////////


	/////////////////////
	// Regex für Geburtsdatum - nur Datum
	/////////////////////


	//// Login validation ////
	$("#formLogin").validate({

		rules: {

			username: {
				required: true,
				//		regex_namen: true,
				minlength: 3,
				remote: {
					url: "pages/user.php",
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

			username: {
				required: true,
				regex_namen: true,
				minlength: 3,
				remote: {
					url: "user.php",
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
				required: true
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
				required: "Email angeben!"
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
			confirmPassword: "Passwort bestätigen!"
		},

		submitHandler: function (form) {
			window.location.href = "success.html";
			form.submit();
		}
	});
	//// Sign Up validation DONE ////
});
