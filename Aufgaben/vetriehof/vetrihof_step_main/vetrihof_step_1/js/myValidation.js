/* 
- Checkbox darf nicht leer sein
- vorname
- nachname
- email
*/

function check() {
    let vname = document.getElementById("vorname");
    let nname = document.getElementById("nachname");
    let plz = document.getElementById("plz");
    let email = document.getElementById("email");
    let checkbox = document.getElementById("agb");
    let empty = "Dieses Feld darf nicht leer sein!";
    let wrongRegex = "Falsche Angaben!";
    let submit = true;


    //////////////////////////////////////
    // ### Vornamen Validierung ### //
    // check regex
    let regexVname = /^[A-Za-zäöü -]+$/;
    if (!regexVname.test(vname.value)) {
        document.getElementById("error_vname").innerHTML = wrongRegex;
        vname.focus();
        submit = false;
        // check if empty //
        if (vname.value == "") {
            document.getElementById("error_vname").innerHTML = empty;
        }
    } else {
        document.getElementById("error_vname").innerHTML = "";
    }
    // ### Vornamen Validierung  DONE ### //
    //////////////////////////////////////



    //////////////////////////////////////
    // ### Nachnamen Validierung ### //
    // check regex
    let regexNname = /^[A-Za-zäöü -]+$/;
    if (!regexNname.test(nname.value)) {
        document.getElementById("error_nname").innerHTML = wrongRegex;
        nname.focus();
        submit = false;
        // check if empty //
        if (nname.value == "") {
            document.getElementById("error_nname").innerHTML = empty;
        }
    } else {
        document.getElementById("error_nname").innerHTML = "";
    }
    // ### Nachnamen Validierung DONE ### //
    //////////////////////////////////////



    //////////////////////////////////////
    // ### PLZ Validierung ### //
    // check regex
    let regexplz = /^[0-9]+$/;
    if (!regexplz.test(plz.value)) {
        document.getElementById("error_plz").innerHTML = wrongRegex;
        plz.focus();
        submit = false;
        // check if empty //
        if (plz.value == "") {
            document.getElementById("error_plz").innerHTML = empty;
        }
    } else {
        document.getElementById("error_plz").innerHTML = "";
    }
    // ### PLZ Validierung  DONE ### //
    //////////////////////////////////////



    //////////////////////////////////////
    // ### Email Validierung ### //
    // check regex
    let regexEmail = /^[A-Za-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regexEmail.test(email.value)) {
        document.getElementById("error_email").innerHTML = wrongRegex;
        submit = false;
        // check if empty //
        if (email.value == "") {
            document.getElementById("error_email").innerHTML = empty;
            email.focus();
        }
    } else {
        document.getElementById("error_email").innerHTML = "";
    }
    // ### Email Validierung DONE ### //
    //////////////////////////////////////



    //////////////////////////////////////
    // ### Email Validierung ### //
    if (!checkbox.checked) {
        document.getElementById("error_box").innerHTML = "Dieses Feld muss angekreuzt werden!"
        submit = false;
    } else {
        document.getElementById("error_box").innerHTML = ""
    }
    // ### Email Validierung DONE ### //
    //////////////////////////////////////
    return submit;
}

