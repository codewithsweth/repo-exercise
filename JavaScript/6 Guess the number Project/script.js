'use strict';

const messageEl = document.querySelector('.message');
const secretNumEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const checkEl = document.querySelector('.check');
const againEl = document.querySelector('.again');
const guessEl = document.querySelector('.guess');
const bodyEl = document.querySelector('body');

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// check button
checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);
  if (!guess) {
    messageEl.textContent = 'Invalid Input';
  } else if (guess === secretNum) {
    messageEl.textContent = 'Correct Guess';
    bodyEl.style.backgroundColor = '#60b347';
    secretNumEl.style.width = '30rem';
    secretNumEl.textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      highscoreEl.textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      //   guess > secretNum
      //     ? (messageEl.textContent = 'Go lower')
      //     : (messageEl.textContent = 'Go higher');
      // you can write the above code as below
      messageEl.textContent = guess > secretNum ? 'Go Lower' : 'Go Higher';
      score -= 1;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'Game Over';
      scoreEl.textContent = 0;
    }
  }
});
// aagain button
againEl.addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  scoreEl.textContent = score;

  guessEl.value = '';

  messageEl.textContent = 'Start Guessing...';

  secretNumEl.textContent = '?';
  secretNumEl.style.width = '15rem';

  bodyEl.style.backgroundColor = '#222';
});
