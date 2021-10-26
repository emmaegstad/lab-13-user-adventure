import quests from '../data/quest-data.js';
import { getUser } from '../storage-utils.js';
import { renderUser } from '../renderUser.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

for (let quest of quests) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    mapLinks.appendChild(a);
}

renderUser(user);
