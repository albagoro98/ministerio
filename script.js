// Simulación de login
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Bienvenido al Ministerio del Interior");
        // Redirigir a otra página si es necesario
    } else {
        loginMessage.style.display = "block";
    }
});
