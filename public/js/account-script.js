var loginEl = document.getElementById('logins');
var RegisterEl = document.getElementById('register');
var ToggleBtn = document.getElementById('btn');
var usernameEl = document.getElementById('username').value;
var passwordEl = document.getElementById('password').value;
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
  loginEl.style.left = '-400px';
  RegisterEl.style.left = '50px';
  ToggleBtn.style.left = '110px';
}

function login() {
  loginEl.style.left = '50px';
  RegisterEl.style.left = '450px';
  ToggleBtn.style.left = '0px';
}
// const loginFormHandler = async (e) => {
//   e.preventDefault();

//   // Collect values from the login form
//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();

//   if (email && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const signupFormHandler = async (e) => {
//   e.preventDefault();

//   const name = document.querySelector("#name-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();

//   if (name && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
