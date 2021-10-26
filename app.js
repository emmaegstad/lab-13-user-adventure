import { setUser, generateUser } from './storage-utils.js';

const userForm = document.getElementById('user');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = new FormData(userForm);

    const newUser = generateUser(userData);

    setUser(newUser);

    window.location.replace('./map');
});
