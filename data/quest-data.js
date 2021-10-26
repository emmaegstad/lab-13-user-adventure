const jailbreak = {
    id: 'jailbreak',
    title: 'Jailbreak',
    map: {
        location: 'TBD',
    },
    image: '../assets/jailbreak.jpeg',
    description:
        'The Human is standing at the door, waiting for the dog to come back inside. They noticed you sneaking up behind them, and shooed you away. What do you do?',
    choices: [
        {
            id: 'choice 1',
            description:
                "Run full tilt through the Human's legs and into the neighbor's yard. Find your freedom.",
            result: 'choice 1 result',
            lives: -3,
            treats: 0,
        },
        {
            id: 'choice 2',
            description:
                'Acquiesce to their wishes, and go nap in the kitchen. It sucks out there, anyways.',
            result: 'choice 2 result',
            lives: 0,
            treats: 5,
        },
        {
            id: 'choice 3',
            description:
                "Make a break for it, but regret it as soon as you're out the door. Let the Human pick you up and bring you back inside.",
            result: 'choice 3 result',
            lives: 0,
            treats: 0,
        },
    ],
};

const heist = {
    id: 'heist',
    title: 'Treat Heist',
    map: {
        location: 'TBD',
    },
    image: '../assets/heist.jpeg',
    description:
        'The Human gave you and your brother each a treat. Your treat is great, but you would like to have his treat, as well. What do you do?',
    choices: [
        {
            id: 'choice 1',
            description: "Steal his treat. He's an idiot.",
            result: 'choice 1 result',
            lives: -3,
            treats: 0,
        },
        {
            id: 'choice 2',
            description:
                "Let him have it. He can't say you never did anything for him now, can he?",
            result: 'choice 2 result',
            lives: 0,
            treats: 5,
        },
        {
            id: 'choice 3',
            description:
                'Walk toward him nonchalantly, and smack him on the head as you go by. He can keep the treat.',
            result: 'choice 3 result',
            lives: 0,
            treats: 0,
        },
    ],
};

const catastrophe = {
    id: 'catastrophe',
    title: 'CATastrophe',
    map: {
        location: 'TBD',
    },
    image: '../assets/catastrophe.jpeg',
    description:
        "The Humans are eating dinner, and you're sitting on the desk watching them from across the room. Boring. You notice a cup full of red liquid on the desk, and are struck by a brilliant idea. What do you do? ",
    choices: [
        {
            id: 'choice 1',
            description: "Knock that shit off! That'll show them.",
            result: 'choice 1 result',
            lives: -3,
            treats: 0,
        },
        {
            id: 'choice 2',
            description:
                "Bat around the computer cables, instead. You're too tired to deal with their hysterics right now. ",
            result: 'choice 2 result',
            lives: 0,
            treats: 5,
        },
        {
            id: 'choice 3',
            description:
                'Meow until they look at you, and then slowly push the cup to the edge. As soon as they start to yell, jump down and walk to the other room. Sike.',
            result: 'choice 3 result',
            lives: 0,
            treats: 0,
        },
    ],
};

const quests = [jailbreak, heist, catastrophe];

export default quests;
