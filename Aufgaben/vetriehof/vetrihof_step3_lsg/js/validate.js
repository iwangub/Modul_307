
$(document).ready(function(){
//eigene Methoden
	jQuery.validator.addMethod("namen", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.namen = {namen: true};

	jQuery.validator.addMethod("postlz", function(value, element)
	{	return this.optional(element) || /^([0-9\s\(\)\+\-\/]{4,5})*$/.test(value);
	}, 	"Postleitzahl?")
	jQuery.validator.classRuleSettings.postlz = {postlz: true};
    
    jQuery.validator.addMethod("emails", function(value, element)
	{	return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
	}, 	"Mailadresse?")
	jQuery.validator.classRuleSettings.emails = {emails: true};
    
    jQuery.validator.addMethod("birth", function(value, element)
	{	return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[0-1])[/., -](0?[1-9]|1[0-2])[/., -](19|20)?\d{2}$/.test(value);
	}, 	"Kein Datum?")
	jQuery.validator.classRuleSettings.birth = {birth: true};

	jQuery.validator.addMethod("street", function(value, element)
	{	return this.optional(element) || /^[a-zA-Z0-9 .,]+$/.test(value);
	}, 	"Geben Sie die Strasse ein und Nummer")
	jQuery.validator.classRuleSettings.street = {street: true};

//validieren
	$("#userform").validate({
//Regeln
	rules: {
	vname: {
		required: true,
		namen: true,
		minlength:3
	},
	nname: {
		required: true,
		namen: true,
		minlength:3
		},
	strasse: {
		street: true
	},
	plz: {
		required: true,
		postlz: true
		},
    ort: {
        required: true
    },
    bdate: {
		required: true,
		birth: true
		},
	email: {
		required: true,
		emails: true
		},
	username: {
		required: true,
		minlength:5,
            remote: { type: "post",
			url: "../php/user.php"
			}
		},
	password: {
		required: true,
		minlength: 8
		},
	confirm_password: { 
		required: true,
		minlength: 8,
		equalTo: "#password"
		}
	},

	
success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
	},
//Ausgabe

//eigene Ausgabenachrichten eintragen
	messages: {
	
    vname: {
        required: "Bitte Nachnamen eingeben",
        minlength: "Name zu Kurz, mindestens 3 Buchstaben"
    },
    nname: {
		required: "Bitte Vorname eingeben",
		minlength: "Name zu Kurz, mindestens 3 Buchstaben"
	},
    
    plz: {
        required: "Bitte eine 4stellige Postleitzahl eigeben",
        postlz: "Es werden nur 4- oder 5stellige Postleitzahlen akzeptiert"
    },
    ort: {
        required: "Bitte einen Ort eingeben"
    },
    bdate: {
        required: "Bitte ein Geburtsdatum eingeben",
        birth: "Dies ist kein Datum"
    },
	email: {
		required: "Bitte eine Mailadresse eingeben",
		email: "Bitte eine richtige E-Mail Adresse?"
		},
	username: {
		required: "Name eingeben",
		minlength: "Name zu Kurz, mindestens 5 Zeichen",
        remote: "Name existiert schon"
		},
	password: {
		required: "Bitte Passwort eingeben",
		minlength: "Passwort zu Kurz, mindestens 8 Zeichen"
		},
	confirm_password: {
		required: "Bitte Passwort eingeben",
		minlength: "Passwort zu kurz, mindestens 8 Zeichen",
		equalTo: "Passwörter stimmen nicht überein"
		},
	},
	});
});