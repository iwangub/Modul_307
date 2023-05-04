

function check() {
    let submit = false;
    let errorMessage = false;

    let counter = 0;
    let firma = document.getElementById("firma");
    let nname = document.getElementById("vname");
    let vname = document.getElementById("nname");
    let adresse = document.getElementById("adresse");
    let ort = document.getElementById("ort");
    let telefon = document.getElementById("telefon");
    let mail = document.getElementById("mailTest");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firma.value == "") {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (nname.value == "") {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (vname.value == "") {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (adresse.value == "") {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (ort.value == "") {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (telefon.value == "") {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (!pattern.test(mail.value)) {
        errorMessage = true
    } else {
        errorMessage = false;
    }

    if (errorMessage == true) {
        alert("Falsche eingabe!");
    } else {
        submit = true
    }

    return submit;
}




        //     case /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value):


        // OLD SWITCH CASE SOLUTION

/*

    switch (firma.value) {
case "":
    break;
default:
    counter++;
}

/*
switch (mail.value) {
    case "":
        break;
 
    case pattern.test(mail.value):
        counter++;
        break;
}*/
/*
    switch (mail.value) {
        case "":
            break;
        default:
            counter++;
    }

    if (counter == 2) {
        submit = true;
    } else {
        alert("falsche eingabe");
    }
    return submit;
    
    */