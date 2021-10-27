import { renderUser } from '../renderUser.js';
import { getUser } from '../storage-utils.js';

const user = getUser();
renderUser(user);

const loseMsg = document.querySelector('.lose-message');
const winTreatsMsg = document.querySelector('.win-message-treats');
const winNoTreatsMsg = document.querySelector('.win-message-notreats');

if (user.Lives === 0) {
    loseMsg.classList.remove('hidden');
    winTreatsMsg.classList.add('hidden');
    winNoTreatsMsg.classList.add('hidden');
}

if (user.Lives > 0 && user.Treats > 0) {
    loseMsg.classList.add('hidden');
    winTreatsMsg.classList.remove('hidden');
    winNoTreatsMsg.classList.add('hidden');
}

if (user.Lives > 0 && user.Treats === 0) {
    loseMsg.classList.add('hidden');
    winTreatsMsg.classList.add('hidden');
    winNoTreatsMsg.classList.remove('hidden');
}

const button = document.querySelector('.play-again');

button.addEventListener('click', () => {
    window.location.replace('../index.html');
});
