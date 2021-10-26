export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

export function getUser() {
    const userString = localStorage.getItem('USER') || '[]';
    const user = JSON.parse(userString);
    return user;
}

export function setUser(arr) {
    const userString = JSON.stringify(arr);
    localStorage.setItem('USER', userString);
}

export function generateUser(data) {
    const user = {
        Name: data.get('name'),
        Avatar: data.get('avatar'),
        Lives: 9,
        Treats: 0,
        Completed: {},
    };
    return user;
}
