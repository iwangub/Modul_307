$(document).ready(function () {
	//eigene Methoden
	jQuery.validator.addMethod("regex_namen", function (value, element) {
		return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	}, "Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.regex_namen = { regex_namen: true };

	//eigene Methoden einbauen 

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
	}, "Datum angeben")
	jQuery.validator.classRuleSettings.regex_birth = { regex_birth: true };
	/////////////////////


	/////////////////////
	// Regex for Street //
	jQuery.validator.addMethod("regex_street", function (value, element) {
		return this.optional(element) || /^[a-zA-Z0-9 .,]+$/.test(value);
	}, "Geben Sie die Strasse ein und Nummer")
	jQuery.validator.classRuleSettings.regex_street = { regex_street: true };
	/////////////////////

	// Regex für Postleitzahl (4 oder 5stellig)
	// Regex für E-Mails (eigene Methode)
	// Regex für Geburtsdatum

	//validieren
	$("#userform").validate({
		//Regeln
		rules: {

			vname: {
				required: true,
				regex_namen: true
			},
			// restliche Regeln hier einbauen

			nname: {
				required: true,
				regex_namen: true
			},

			plz: {
				required: true,
				regex_plz: true
			},

			ort: {
				required: true,
				regex_street: true
			},
			bdate: {
				required: true,
				regex_birth: true
			},
			email: {
				required: true,
				regex_email: true
			},
			password: {
				required: true,
				minlength: 6
			},
			confirm_password: {
				required: true,
				equalTo: "#password"
			},

			// AJAX mit Remotedatei taken.php abfragen ob Username admin und dbuser genommen wurden
			username: {
				required: true,
				regex_namen: true,
				minlength: 5,
				remote: {
					type: "post",
					url: "php/taken.php"
				}
			}
		},
		success: function (element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		},
		//Ausgabe

		//eigene Ausgabenachrichten eintragen
		messages: {
			vname: {
				required: "Bitte einen Vornamen angeben"
			},
			nname: {
				required: "Bitte einen Nachnamen angeben"
			},
			plz: {
				required: "Bitte PLZ angeben"
			},
			ort: {
				required: "Bitte Ort angeben"
			},
			bdate: {
				required: "Bitte Geburtsdatum angeben"
			},
			email: {
				required: "Bitte eine Email-Adresse angeben"
			},
			password: {
				required: "Bitte ein Passwort angeben",
				minlength: "Mindestens 6 Zeichen"
			},
			username: {
				required: "Bitte einen Benutzernamen angeben",
				remote: "Benutzername nicht verfügbar",
				minlength: "Mindestens 5 Buchstaben"
			},
			confirm_password: {
				required: "Bitte Passwort wiederholen",
				equalTo: "Passwort muss übereinstimmen"
			},
		},
	});
});
