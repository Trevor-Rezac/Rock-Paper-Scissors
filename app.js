import { getRandomItem } from './function-utils.js';

const userScoreEl = document.querySelector('.user-score');
const compScoreEl = document.querySelector('.comp-score');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const resultsEL = document.querySelector('.results');

let userScore = '';
let compScore = '';

const choiceArr = [
    rock,
    paper,
    scissors
];

rock.addEventListener('click', () => {
    const compGuess = getRandomItem(choiceArr);
    handleGuess(rock, compGuess);
});

paper.addEventListener('click', () => {
    const compGuess = getRandomItem(choiceArr);
    handleGuess(paper, compGuess);
});

scissors.addEventListener('click', () => {
    const compGuess = getRandomItem(choiceArr);
    handleGuess(scissors, compGuess);
});


function handleGuess(userGuess, correctGuess) {
    resetStyles();

    if (userGuess === correctGuess) {
        resultsEL.textContent = 'Draw!';
        userGuess.style.borderColor = 'grey';
        userGuess.style.boxShadow = '0 0 10px grey';
    } else if (userGuess === rock && correctGuess === scissors) {
        updateUserScore();
        resultsEL.textContent = 'Rock smashes Scissors! You Win!';
        userGuess.style.borderColor = 'green';
        userGuess.style.boxShadow = '0 0 10px green';
    } else if (userGuess === paper && correctGuess === rock) {
        updateUserScore();
        resultsEL.textContent = 'Paper covers Rock! You Win!';
        userGuess.style.borderColor = 'green';
        userGuess.style.boxShadow = '0 0 10px green';
    } else if (userGuess === scissors && correctGuess === paper) {
        updateUserScore();
        resultsEL.textContent = 'Scissors cut Paper! You Win!';
        userGuess.style.borderColor = 'green';
        userGuess.style.boxShadow = '0 0 10px green';
    } else if (correctGuess === rock && userGuess === scissors) {
        updateCompScore();
        resultsEL.textContent = 'Rock smashes Scissors! You Lose!';
        userGuess.style.borderColor = 'red';
        userGuess.style.boxShadow = '0 0 10px red';
    } else if (correctGuess === paper && userGuess === rock) {
        updateCompScore();
        resultsEL.textContent = 'Paper covers Rock! You Lose!';
        userGuess.style.borderColor = 'red';
        userGuess.style.boxShadow = '0 0 10px red';
    } else if (correctGuess === scissors && userGuess === paper) {
        updateCompScore();
        resultsEL.textContent = 'Scissors cut Paper! You Lose!';
        userGuess.style.borderColor = 'red';
        userGuess.style.boxShadow = '0 0 10px red';
    } 
}

function updateUserScore() {
    userScore++;
    userScoreEl.textContent = `${userScore} `;
}

function updateCompScore() {
    compScore++;
    compScoreEl.textContent = ` ${compScore}`;
}

function resetStyles() {
    resultsEL.textContent = '';
    rock.style.border = 'solid 2px var(--timberwolf)';
    rock.style.boxShadow = 'none';
    paper.style.border = 'solid 2px var(--timberwolf)';
    paper.style.boxShadow = 'none';
    scissors.style.border = 'solid 2px var(--timberwolf)';
    scissors.style.boxShadow = 'none';
}

// function win(userGuess) {
//     userGuess.classList.add('win');
// }

// function lose(userGuess) {
//     userGuess.classList.add('lose');
// }

// function draw(userGuess) {
//     userGuess.classList.add('draw');
// }

