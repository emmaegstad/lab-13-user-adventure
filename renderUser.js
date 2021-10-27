const userInfo = document.querySelector('.user-info');

export function renderUser(user) {
    const avatar = document.querySelector('.avatars');
    avatar.src = `../assets/avatars/${user.Avatar}.jpeg`;

    const userInfoText = document.querySelector('.user-info__text');

    const name = document.querySelector('.name');
    name.textContent = user.Name;

    const lives = document.querySelector('.lives');
    lives.textContent = `Lives: ${user.Lives}`;

    const treats = document.querySelector('.treats');
    treats.textContent = `Treats: ${user.Treats}`;

    userInfo.append(avatar, userInfoText);
}
