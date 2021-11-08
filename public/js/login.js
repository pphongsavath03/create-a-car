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

document.querySelector('#login-form').addEventListener('submit', loginFormHanlder);
document.querySelector('#register').addEventListener('submit', signupFormHandler);