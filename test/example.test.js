import {
    getUser,
    setUser,
    generateUser,
    scoreQuest,
    hasCompletedAllQuests,
} from '../storage-utils.js';

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

test('scoreQuest should update lives, hp and completed quests on user object', (expect) => {
    //Arrange
    const userObj = {
        Name: 'Minnie',
        Avatar: 'grey-tabby',
        Completed: {},
        Treats: 0,
        Lives: 9,
    };
    const choiceObj = {
        id: 'choice 1',
        description:
            "Run full tilt through their legs and into the neighbor's yard. Find your freedom.",
        result: 'You get lost and spend two days outside. It storms, and you finally find your way home soaked and hungry. You lose three lives.',
        lives: -3,
        treats: 2,
    };
    const questId = 'jailbreak';

    //Act
    scoreQuest(userObj, choiceObj, questId);

    //Expect
    expect.equal(userObj.Lives, 6);
    expect.equal(userObj.Treats, 2);
    expect.equal(userObj.Completed[questId], true);
});

test('hasCompletedAllQuests should return true if user has completed all quests', (expect) => {
    //Arrange
    const userObj = {
        Completed: { jailbreak: true, heist: true, catastrophe: true },
    };

    //Act
    const actual = hasCompletedAllQuests(userObj);

    //Expect
    expect.equal(actual, true);
});

test('hasCompletedAllQuests should return false if user has not completed all quests', (expect) => {
    //Arrange
    const userObj = {
        Completed: { jailbreak: true, heist: true },
    };
    //Act

    const actual = hasCompletedAllQuests(userObj);
    //Expect
    expect.equal(actual, false);
});
