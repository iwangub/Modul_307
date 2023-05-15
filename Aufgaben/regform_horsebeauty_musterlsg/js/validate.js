$(document).ready(function() { 
//eigene Methoden
	jQuery.validator.addMethod("names", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.names = {names: true};
	
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
	
	
//validieren
	$("#userform").validate({
       
//Regeln
	rules: {
	vname: {
		required: true,
		names: true
	},
	nname: {
		required: true,
		names: true,
		minlength:3
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
			url: "php/taken.php"
			}
		},
	password: {
		required: true,
		minlength: 6
		},
	confirm_password: {
		required: true,
		minlength: 6,
		equalTo: "#password"
		}
	},
    
	success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
	},
//Ausgabe
	messages: {
	
    vname: {
        required: "Bitte Nachnamen eingeben"
    },
    nname: {
		required: "Bitte Vorname eingeben",
		minlength: "Name zu Kurz"
		},
    
    plz: {
        required: "Bitte eine 4stellige Postleitzahl eigeben",
        postlz: "Bitte eine 4 oder 5stellige Zahl"
    },
    ort: {
        required: "Bitte einen Ort eingeben"
    },
    bdate: {
        required: "Bitte ein Geburtsdatum eingeben"
    },
	email: {
		required: "Bitte eine Mailadresse eingeben",
		email: "Bitte eine richtige E-Mail Adresse?"
		},
	username: {
		required: "Name eingeben",
		minlength: "Name zu Kurz",
        remote: "Name existiert schon, bitte anderen wählen"
		},
	password: {
		required: "Bitte Passwort eingeben",
		minlength: "Passwort zu Kurz"
		},
	confirm_password: {
		required: "Bitte Passwort eingeben",
		minlength: "Passwort zu kurz",
		equalTo: "Passwörter stimmen nicht überein"
		},
	},
    

	});
	
});
