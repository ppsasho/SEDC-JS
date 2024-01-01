let hintBtn = document.getElementById('hint');
let playAgainBtn = document.getElementById('playAgain');
let categoryContent = document.getElementById('chosenCategory');
let wordField = document.getElementById('chosenWord');
let sketch = document.getElementById('sketch');
let currentLives = document.getElementById('lives');
let clue = document.getElementById('clue');



let words = [
    {
        category: 'Time',
        word: 'afternoon',

        clue: function() {
            clue.innerText = 'The time between morning and evening, often associated with a relaxing break.';
        }
    },
    {
        category: 'Feeling',
        word: 'awkward',

        clue: function() {
            clue.innerText = 'Socially ____________.';
        }
    },
    {
        category: 'Hobbies',
        word: 'bookworm',

        clue: function() {
            clue.innerText = 'You get lost in the pages of most books.';
        }
    },
    {
        category: 'Fashion',
        word: 'snazzy',

        clue: function() {
            clue.innerText = 'Stylish and elegant in a lively, eye-catching way.';
        }
    },
    {
        category: 'Architecture',
        word: 'stronghold',

        clue: function() {
            clue.innerText = 'A heavily fortified place.';
        }
    },
    {
        category: 'Food',
        word: 'flapjack',

        clue: function() {
            clue.innerText = 'A sweet and delicous treat made from rolled oats.';
        }
    },
    {
        category: 'Mythology',
        word: 'sphinx',

        clue: function() {
            clue.innerText = 'It has the body of a lion and a head of a human/animal, known for posing riddles..';
        }
    },
    {
        category: 'Games',
        word: 'boggle',

        clue: function() {
            clue.innerText = 'A game where players search for words hidden in a grid of letters, competing to find the most words within a time limit.';
        }
    },
    {
        category: 'Transportation',
        word: 'rickshaw',

        clue: function() {
            clue.innerText = 'A two-wheeled vehicle, often pulled by a poerson on foot.';
        }
    },
    {
        category: 'Appliance',
        word: 'microwave',

        clue: function() {
            clue.innerText = 'I forgot to make my popcorn....';
        }
    },
    {
        category: 'Self-Reflection',
        word: 'unworthy',

        clue: function() {
            clue.innerText = 'A feeling of not deserving.';
        }
    }
]

function randomNumber (){
    let result = Math.floor(Math.random() * ((1 + 10 - 1)) + 1) - 1;
    if(result > 0 || result <= 10) {
        return result;
    }
}
console.log(`Number generated: ${randomNumber()}`);


let chosenWord = words[randomNumber()];
console.log(chosenWord);


function categoryName() {
    let category = Object.keys(chosenWord);

    let categoryKey = category[0];
    let categoryValue = chosenWord[categoryKey];
    console.log(`The chosen category is: ${categoryValue}`);

    return categoryValue;
}

function guessWord() {
    let word = Object.keys(chosenWord);

    let wordKey = word[1];
    let wordValue = chosenWord[wordKey];
    console.log(`The chosen word is: ${wordValue}`);

    let hiddenWord = '';

    for(let i = 0; i < wordValue.length; i++) {
        hiddenWord += '_ ';
    }
    
    return hiddenWord;
}

function getClue(){
    result = chosenWord;

    return result;
}

categoryContent.innerHTML = `Category:&nbsp;${categoryName()}`;

wordField.innerText = `Word: ${guessWord()}`;

clue.innerHTML = `Clue -&nbsp;${getClue}`;

sketch.innerHTML = '<img src="img/hangman6.png" alt="hangman">';

let lives = 6;

currentLives.innerHTML = `Lives:&nbsp;${lives}`;