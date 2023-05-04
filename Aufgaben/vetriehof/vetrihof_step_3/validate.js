$(document).ready(function(){
//eigene Methoden
	jQuery.validator.addMethod("namen", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.namen = {namen: true};

//eigene Methoden einbauen 
	// nur Buchstaben und Nachname mind. 3 Zeichen
	// Regex für Postleitzahl (4 oder 5stellig)
	// Regex für E-Mails @ Zeichen und mind 2 Stellen bei der top level domain
	// Regex für Geburtsdatum - nur Datum

//validieren
	$("#userform").validate({
//Regeln
	rules: {
	vname: {
		required: true,
		namen: true
		},

// restliche Regeln hier einbauen

// AJAX mit Remotedatei user.php abfragen ob Username admin und dbuser genommen wurden
	



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
        required: "Bitte einen Vornamen angeben"
    },
	}
	});
});
