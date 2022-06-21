'use strict';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'

const onLoginSubmit = (event) => {
    
    // prevent the refresh of the submit
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, `${username}`);

    paintGreetings(username);
}

const paintGreetings = (parameter) => {
    greeting.innerText = `Hello ${parameter}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    // Show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // Show greeting
    paintGreetings(savedUserName);
}

