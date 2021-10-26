import { getUser, setUser, generateUser } from '../storage-utils.js';

const test = QUnit.test;

test('getUser should grab USER from local storage if it exists', (expect) => {
    //Arrange
    const fakeUser = {
        name: 'Emma',
        id: 1,
    };
    localStorage.setItem('USER', JSON.stringify(fakeUser));
    const expected = {
        name: 'Emma',
        id: 1,
    };

    //Act
    const fakeUserResult = getUser();

    //Expect
    expect.deepEqual(expected, fakeUserResult);
});

test('getUser should return empty array if no user exists in LS', (expect) => {
    //Arrange
    localStorage.removeItem('USER');
    const expected = [];

    //Act
    const fakeUserResult = getUser();

    //Expect
    expect.deepEqual(expected, fakeUserResult);
});

test('setUser should push user info to local storage', (expect) => {
    //Arrange
    const fakeUser = {
        name: 'Emma',
        id: 1,
    };
    const expected = {
        name: 'Emma',
        id: 1,
    };

    //Act
    setUser(fakeUser);
    const fakeUserResult = getUser();

    //Expect
    expect.deepEqual(expected, fakeUserResult);
});

test('generateUser should return a new user object', (expect) => {
    //Arrange
    const expected = {
        Name: 'emma',
        Avatar: 'longhair',
        Lives: 9,
        Treats: 0,
        Completed: {},
    };

    const formData = new FormData();
    formData.set('name', 'emma');
    formData.set('avatar', 'longhair');

    //Act
    const actual = generateUser(formData);

    //Expect
    expect.deepEqual(actual, expected);
});
