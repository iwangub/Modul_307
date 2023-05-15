$(document).ready(function(){
//eigene Methoden
	jQuery.validator.addMethod("namen", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.namen = {namen: true};

//eigene Methoden einbauen 

	// Regex für Postleitzahl (4 oder 5stellig)
	// Regex für E-Mails (eigene Methode)
	// Regex für Geburtsdatum

//validieren
	$("").validate({
//Regeln
	rules: {
	vname: {
		required: true,
		names: true
		},

// restliche Regeln hier einbauen

// AJAX mit Remotedatei taken.php abfragen ob Username admin und dbuser genommen wurden
	



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
	},
	});
});
