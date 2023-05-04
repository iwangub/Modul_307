
function check() {

	if (document.form1.name.value == "") {
		alert('Bitte geben Sie einen Namen ein');
		document.form1.name.focus();
		return false;
	}

	if (document.form1.vorname.value == "") {
		alert('Bitte geben Sie einen Vornamen ein');
		document.form1.vorname.focus();
		return false;
	}

}

document.write('Das hast Du sauber gelöst Narcisa<br/>');

function color(x) {
	document.getElementById('pink').style.color = x;

}

function changeP() {
	let element = document.getElementsByTagName("p");
	let i = 0;
	for (i = 0; i < element.length; i++) {
		element[i].style.backgroundColor = 'red';
	}
}

function blue() {
	document.getElementsByTagName('h1')[0].style.color = 'blue';
}

function cxl() {
	document.getElementsByTagName('h1')[0].style.color = '';
	document.getElementById('pink').style.color = '';

}

function red() {
	var x = document.getElementsByTagName("p");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "red";
	}
}

function nored() {
	var x = document.getElementsByTagName("p");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "";
	}
}

