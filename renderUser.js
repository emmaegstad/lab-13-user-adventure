const userInfo = document.querySelector('.user-info');

export function renderUser(user) {
    const avatar = document.createElement('img');
    avatar.src = `../assets/avatars/${user.Avatar}.jpeg`;
    avatar.classList.add('avatars');

    const userInfoText = document.createElement('div');
    userInfoText.classList.add('user-info__text');

    const name = document.createElement('span');
    name.textContent = user.Name;

    const lives = document.createElement('span');
    lives.textContent = `Lives: ${user.Lives}`;

    const treats = document.createElement('span');
    treats.textContent = `Treats: ${user.Treats}`;

    userInfoText.append(name, lives, treats);
    userInfo.append(avatar, userInfoText);
}
