/* redirect with button to another HTML site */
let button = document.getElementById("redirectButton");
button.addEventListener("click", function () {
    window.location.href = "pages/login_form.html"
});
/* redirect with button to another HTML site ##DONE## */



/* Form validation Function */
function validate() {
    let username = document.getElementById("username");
    let vname = document.getElementById("vname");
    let nname = document.getElementById("nname");
    let adresse = document.getElementById("adresse");
    let plz = document.getElementById("plz");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let checkSubmit = 0;
    let submit = false;

    switch (username.value) {
        case "":
            document.getElementById("usernameError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("usernameError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    switch (nname.value) {
        case "":
            document.getElementById("nnameError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("nnameError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    switch (vname.value) {
        case "":
            document.getElementById("vnameError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("vnameError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    switch (adresse.value) {
        case "":
            document.getElementById("adresseError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("adresseError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    switch (plz.value) {
        case "":
            document.getElementById("plzError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("plzError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    switch (phone.value) {
        case "":
            document.getElementById("phoneError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("phoneError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    switch (email.value) {
        case "":
            document.getElementById("emailError").innerHTML = "Feld darf nicht leer sein!";
            break;
        case "test":
            document.getElementById("emailError").innerHTML = "Falsche Eingabe!";
            break;
        default:
            checkSubmit++;
    }

    if (checkSubmit == 7) {
        submit = true;
    }

    return submit;
}




