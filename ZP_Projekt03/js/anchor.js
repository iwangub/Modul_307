let dropdown = document.getElementById("loginForm");


let button = document.getElementById("redirectButton");
button.addEventListener("click", function () {
    window.location.href = "pages/login_form.html";
    window.location.href = "#loginForm";
});