var loginEl = document.getElementById("login");
var RegisterEl = document.getElementById("register");
var ToggleBtn = document.getElementById("btn");

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


const loginFormHanlder = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch ('/api/users/login', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type':'application/json' },
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert( 'Failed to log in');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim()

    if ( username && email && password) {
        const response = await fetch ('/api/users', {
            method:'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type':'application/json' },   
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert( 'Failed to sign in');
        }
    }
};


document.querySelector('#login-btn').addEventListener('click', loginFormHanlder);
document.querySelector('#register-btn').addEventListener('click', signupFormHandler);