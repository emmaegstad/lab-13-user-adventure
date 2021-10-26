import { findById } from '../storage-utils.js';
import quests from '../data/quest-data.js';

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDesc = document.getElementById('quest-description');
const option1 = document.getElementById('label1');
const option2 = document.getElementById('label2');
const option3 = document.getElementById('label3');

const params = new URLSearchParams(window.location.search);
const questParam = params.get('id');

const currentQuest = findById(questParam, quests);

questTitle.textContent = currentQuest.title;
questImage.src = currentQuest.image;
questDesc.textContent = currentQuest.description;
option1.textContent = currentQuest.choices[0].description;
option2.textContent = currentQuest.choices[1].description;
option3.textContent = currentQuest.choices[2].description;
