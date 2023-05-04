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


	$("#userform").validate({

		rules: {

			vname: {
				required: true,
				regex_namen: true,
				minlength: 3
			},

			nname: {
				required: true,
				regex_namen: true,
				minlength: 3
			},

			plz: {
				required: true,
				regex_plz: true,
				minlength: 4,
				maxlength: 6
			},
			ort: {
				required: true
			},

			bdate: {
				required: true,
				date: true
			},

			email: {
				required: true,
				regex_email: true
			},
			// AJAX mit Remotedatei user.php abfragen ob Username admin und dbuser genommen wurden
			username: {
				required: true,
				minlength: 5,
				remote: {
					url: "user.php",
					type: "post"
				}
			},
			// AJAX DONE

			password: {
				required: true,
				minlength: 8
			},

			confirm_password: {
				required: true,
				equalTo: "#password"
			}
		},

		success: function (element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		},

		//eigene Ausgabenachrichten eintragen
		messages: {

			vname: {
				required: "Bitte Vornamen angeben!",
				minlength: "Mindestens 3 Zeichen!"
			},

			nname: {
				required: "Bitte Nachnamen angeben!",
				minlength: "Mindestens 3 Zeichen!"
			},

			username: {
				required: "Bitte Benutzernamen angeben!",
				minlength: "Mindestens 3 Zeichen!",
				remote: "Username already taken!"
			},

			ort: {
				required: "Bitte Ort angeben!"
			},

			plz: {
				required: "Bitte Postleitzahl angeben!",
				minlength: "Mindestens 4 Zahlen angeben!"
			},

			bdate: {
				required: "Bitte Datum angeben!",
				date: "Gültiges Datum angeben!"
			},

			email: {
				required: "Bitte Email angeben!",
				minlength: "Mindestens 3 Zeichen!"
			},

			username: {
				required: "Bitte Benutzernamen angeben!",
				minlength: "Mindestens 5 Zeichen!",
				remote: "Dieser Benutzername wird bereits benutzt!"

			},
			password: {
				required: "Bitte Passwort angeben!",
				minlength: "Mindestens 3 Zeichen!"
			},
			confirm_password: {
				required: "Bitte Passwort wiederholen!",
				equalTo: "Passwort stimmt nicht überein!"
			}
		},

		submitHandler: function (form) {
			window.location.href = "success.html";
			form.submit();
		}
	});
});
