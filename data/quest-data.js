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
                "Run full tilt through their legs and into the neighbor's yard. Find your freedom.",
            result: 'A surprise to no one (except you), you get lost and spend two horrible days outside. You finally find your way back home scared and hungry. You lose three lives.',
            lives: -3,
            treats: 0,
        },
        {
            id: 'choice 2',
            description:
                'Acquiesce to their wishes, and go nap in the kitchen. It sucks out there, anyways.',
            result: 'What a good kitty! You wake up feeling refreshed and ready to wreack havoc, having forgotten about the outdoors entirely. 5 treats for you.',
            lives: 0,
            treats: 5,
        },
        {
            id: 'choice 3',
            description:
                "Make a break for it, but regret it as soon as you're out the door. Let the Human pick you up and bring you back inside.",
            result: 'Glad you learned your lesson. Last time you made an escape, you got stuck outside for two days! No lives lost, but no treats for you, either.',
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
        'The Human gave you and your brother each a treat. Your treat is fine and all... but you want his treat, too. What do you do?',
    choices: [
        {
            id: 'choice 1',
            description: "Steal his treat. He's an idiot.",
            result: "You gain 1 treat, but your brother wasn't about to let that slide. He chased you down and kicked your butt. Was it worth it? Who's to say. 3 lives lost.",
            lives: -3,
            treats: 1,
        },
        {
            id: 'choice 2',
            description:
                "Let him have it. He can't say you never did nothin' for him now, can he?",
            result: 'Good kitty. I appreciate the rare display of self-control, so 5 treats for you.',
            lives: 0,
            treats: 5,
        },
        {
            id: 'choice 3',
            description:
                'Walk toward him nonchalantly, and smack him on the head as you go by. Loser can keep the treat.',
            result: 'Oh my god. You are such a jerk. No lives lost, no treats gained.',
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
        'The Humans are eating dinner while you watch them from across the room. Boring. You notice a cup of wine on the desk, and are struck by a brilliant idea. What to do? ',
    choices: [
        {
            id: 'choice 1',
            description: "Knock that shit off! That'll show 'em.",
            result: 'The drink spills on the dog sleeping below the desk. He wakes up in a panic and knocks over the bookshelf behind him. The humans are yelling and scrambling to catch it. You get so scared that you lose 3 lives.',
            lives: -3,
            treats: 0,
        },
        {
            id: 'choice 2',
            description:
                "Bat around the computer cables instead. You're too tired to deal with their hysterics. ",
            result: "Excellent choice - but I'd better not see any bite marks on those cables! 5 treats for you.",

            lives: 0,
            treats: 5,
        },
        {
            id: 'choice 3',
            description:
                'Meow until they look at you, and then slowly push the cup to the edge. As soon as they start to yell, jump down and walk away. Sike.',
            result: 'Thanks for that, I guess. It never ends with you. No lives lost, no treats gained.',

            lives: 0,
            treats: 0,
        },
    ],
};

const quests = [jailbreak, heist, catastrophe];

export default quests;
