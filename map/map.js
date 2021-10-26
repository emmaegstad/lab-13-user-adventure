import quests from '../data/quest-data.js';
// import { getUser } from '../storage-utils.js';

const mapLinks = document.getElementById('map-links');

// const user = getUser();

for (let quest of quests) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    mapLinks.appendChild(a);
}

// user.Completed.push('Jailbreak');
// if (user.Completed.includes('Jailbreak')) {
//     a.classList.append('blocked');
// }
