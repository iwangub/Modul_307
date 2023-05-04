$(document).ready(function () {

    // Error Message if its empty 
    const errorEmpty = "input must not be empty!";

    /* Login validation */
    $("form").submit(function (event) {
        // checker if all conditions are true
        let check = 0;

        // username validation //
        let username = $("#username");
        let usernameError = $("#usernameError");

        if (username.val() === "") {
            usernameError.text(errorEmpty);
        } else {
            check++;
        }
        // DONE //

        // password validation //
        let passwd = $("#passwd");
        let passwdError = $("#passwdError");

        if (passwd.val() === "") {
            passwdError.text(errorEmpty);
        } else {
            check++;
        }
        // DONE //

        // check if the form gets submitted or not
        if (check !== 2) {
            event.preventDefault();
        } else {
            this.submit();
        }
    });

    /* Login validation # DONE # */


    /* Registration validation */




    /* Registration validation  # DONE # */

});


















/* OLD */
/*

$(document).ready(function () {


    function validate() {
        let username = $("#username");
        let passwd = $("#passwd");
    }

    if (username.val() == "") {
        $("usernameError").html("Feld darf nicht leehr sein!");
    }


});



$(document).ready(function () {
    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
        }
    }

    // Validate Email
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        } else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    });

    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "**length of your password must be between 3 and 10"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
        }
    }

    // Validate Confirm Password
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#conpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Password didn't Match");
            $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
        }
    }

    // Submit button
    $("#submitbtn").click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (
            usernameError == true &&
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
        ) {
            return true;
        } else {
            return false;
        }
    });
});
*/

