import { findById, getUser } from '../storage-utils.js';
import { renderUser } from '../renderUser.js';
import quests from '../data/quest-data.js';

const user = getUser();

renderUser(user);

const params = new URLSearchParams(window.location.search);
const questParam = params.get('id');

const currentQuest = findById(questParam, quests);

const questTitle = document.getElementById('quest-title');
questTitle.textContent = currentQuest.title;

const questImage = document.getElementById('quest-image');
questImage.src = currentQuest.image;

const questDesc = document.getElementById('quest-description');
questDesc.textContent = currentQuest.description;

const choiceSection = document.querySelector('.quest-choices');

for (let choice of currentQuest.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;

    label.append(input, span);
    choiceSection.append(label);
}

const button = document.createElement('button');
button.textContent = 'MEOW';
choiceSection.append(button);
