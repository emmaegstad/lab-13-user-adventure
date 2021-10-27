import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests } from '../storage-utils.js';
import { renderUser } from '../renderUser.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

if (user.Lives === 0 || hasCompletedAllQuests(user)) {
    window.location.replace('../gameover/index.html');
}

for (let quest of quests) {
    if (user.Completed[quest.id]) {
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest) {
    const div = document.createElement('div');
    div.classList.add(`${quest.id}`);
    div.classList.add('bubble');

    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    div.appendChild(a);
    mapLinks.appendChild(div);
}

function displaySpan(quest) {
    const div = document.createElement('div');
    div.classList.add(`${quest.id}`);
    div.classList.add('bubble');

    const span = document.createElement('span');
    span.classList.add('blocked-link');
    span.textContent = quest.title;

    div.appendChild(span);
    mapLinks.appendChild(div);
}

renderUser(user);
