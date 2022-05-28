'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);
let guess = document.querySelector(".guess");
var curScore = document.querySelector('.score');
function displayMessage(msg) {
    let message = document.querySelector('.message');
    message.textContent = msg;
}
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20 + 1);
});
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    if (guess == secretNumber) {
        displayMessage("Wow you won the game,you guess the correct number👏👏");
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "#34cc17";
    }

    else if (score > 0 && guess > secretNumber) {
        displayMessage('Too high');
        score--;
        curScore.textContent = score;
    }

    else if (score > 0 && guess < secretNumber) {
        displayMessage("Too low.");
        score--;
        curScore.textContent = score;
    }
    else if (score <= 0) {
        displayMessage('You lost the game! 😢');
        curScore.textContent = score;
        document.body.style.backgroundColor = "#ff0000";
    }
    else if (guess < 1 || guess > 20) {
        score--;
        displayMessage("Invalid Input");
        curScore.textContent = score;
    }
});