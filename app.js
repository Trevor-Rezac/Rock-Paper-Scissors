import { getRandomItem } from './function-utils.js';

const userScoreEl = document.querySelector('.user-score');
const compScoreEl = document.querySelector('.comp-score');
const resetBtn = document.querySelector('#reset-btn');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const resultsEL = document.querySelector('.results');
const commandEl = document.querySelector('.command');

let userScore = 0;
let compScore = 0;

const commandArr = [
    'Make a move!',
    'On Three! 1..2..3!',
    'Make your move!',
    'Rock, Paper, Scissors, Shoot!',
    'Ro-Sham-Bo!'
];

const choiceArr = [
    rock,
    paper,
    scissors
];

displayCommand();

resetBtn.addEventListener('click', () => {
    resetStats();
});

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
    commandEl.textContent = '';

    if (userGuess === correctGuess) {
        resultsEL.textContent = 'Draw!';
        draw(userGuess);
    } else if (userGuess === rock && correctGuess === scissors) {
        updateUserScore();
        resultsEL.textContent = 'Rock smashes Scissors! You Win!';
        win(userGuess);
    } else if (userGuess === paper && correctGuess === rock) {
        updateUserScore();
        resultsEL.textContent = 'Paper covers Rock! You Win!';
        win(userGuess);
    } else if (userGuess === scissors && correctGuess === paper) {
        updateUserScore();
        resultsEL.textContent = 'Scissors cut Paper! You Win!';
        win(userGuess);
    } else if (correctGuess === rock && userGuess === scissors) {
        updateCompScore();
        resultsEL.textContent = 'Rock smashes Scissors! You Lose!';
        lose(userGuess);
    } else if (correctGuess === paper && userGuess === rock) {
        updateCompScore();
        resultsEL.textContent = 'Paper covers Rock! You Lose!';
        lose(userGuess);
    } else if (correctGuess === scissors && userGuess === paper) {
        updateCompScore();
        resultsEL.textContent = 'Scissors cut Paper! You Lose!';
        lose(userGuess);
    }
    disablePointer();
    resetTimeout();
    
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
    displayCommand();
    rock.style.border = 'solid 2px var(--timberwolf)';
    rock.style.boxShadow = 'none';
    paper.style.border = 'solid 2px var(--timberwolf)';
    paper.style.boxShadow = 'none';
    scissors.style.border = 'solid 2px var(--timberwolf)';
    scissors.style.boxShadow = 'none';
    enablePointer();
}

function resetTimeout(){
    setTimeout(resetStyles, 2000);
}

function draw(userGuess) {
    userGuess.style.borderColor = 'grey';
    userGuess.style.boxShadow = '0 0 10px grey';
}

function win(userGuess) {
    userGuess.style.borderColor = 'green';
    userGuess.style.boxShadow = '0 0 10px green';
}

function lose(userGuess) {
    userGuess.style.borderColor = 'red';
    userGuess.style.boxShadow = '0 0 10px red';
}

function disablePointer() {
    rock.classList.add('noPointer');
    paper.classList.add('noPointer');
    scissors.classList.add('noPointer');
}

function enablePointer() {
    rock.classList.remove('noPointer');
    paper.classList.remove('noPointer');
    scissors.classList.remove('noPointer');
}

function displayCommand() {
    commandEl.textContent = getRandomItem(commandArr);
}

function resetStats() {
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = `${userScore} `;
    compScoreEl.textContent = ` ${compScore}`;
}