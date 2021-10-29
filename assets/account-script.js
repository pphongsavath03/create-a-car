var loginEl = document.getElementById("login");
var RegisterEl = document.getElementById("register");
var ToggleBtn = document.getElementById("btn");
var usernameEl = document.getElementById("username").value
var passwordEl = document.getElementById("password").value
// var userObj = [
//     {
//         username: "Desiree",
//         password: "Password1234"
//     },
//     {
//         username: "Phon",
//         password: "Password1234"
//     },
//     {
//         username: "Cooper",
//         password: "Password1234"
//     },
//     {
//         username: "Samira",
//         password: "Password1234"
//     }
// ]

function register() {
    loginEl.style.left = "-400px";
    RegisterEl.style.left = "50px";
    ToggleBtn.style.left = "110px";
}

function login() {
    loginEl.style.left = "50px";
    RegisterEl.style.left = "450px";
    ToggleBtn.style.left = "0px";
}



