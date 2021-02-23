'use strict';

const rollDice = document.getElementById('roll-dice');
const holdScore = document.getElementById('hold-dice');
const newGame = document.getElementById('new-game');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');

let player = false;

const name1 = document.getElementById('name--0').textContent;
let score0 = Number((document.getElementById('score--0').textContent = 0));
let current0 = Number(document.getElementById('current--0').textContent);

const name2 = document.getElementById('name--1').textContent;
let score1 = Number((document.getElementById('score--1').textContent = 0));
let current1 = Number(document.getElementById('current--1').textContent);

const diceRoll = function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(`player${player}`);

  document.querySelector('.dice').src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    if (player === false) {
      current0 += diceNumber;
      document.getElementById('current--0').textContent = current0;
      current1 = 0;
    }
    score0 = Number(document.getElementById('current--0').textContent);
    if (player === true) {
      current1 += diceNumber;
      document.getElementById('current--1').textContent = current1;
      current0 = 0;
    }
    score1 = Number(document.getElementById('current--1').textContent);
  } else {
    player = !player;
    current1 = 0;
    current0 = 0;
    if (!playerActive0.classList.contains('player--active')) {
      playerActive1.classList.remove('player--active');
      playerActive0.classList.add('player--active');
    } else {
      playerActive0.classList.remove('player--active');
      playerActive1.classList.add('player--active');
    }
  }
};

const finalScore = function () {
  console.log('Holding');
  if (!playerActive0.classList.contains('player--active')) {
    playerActive1.classList.remove('player--active');
    playerActive0.classList.add('player--active');
  } else {
    playerActive0.classList.remove('player--active');
    playerActive1.classList.add('player--active');
  }
  if (player === false) {
    current1 = 0;
    current0 = 0;
    document.getElementById('score--0').textContent =
      Number(document.getElementById('score--0').textContent) + score0;
    score1 = 0;

    document.getElementById('current--1').textContent = 0;
  }
  if (player === true) {
    current0 = 0;
    current1 = 0;
    document.getElementById('score--1').textContent =
      Number(document.getElementById('score--1').textContent) + score1;
    score0 = 0;
    document.getElementById('current--0').textContent = 0;
  }

  player = !player;
};

const reset = function () {
  document.getElementById('name--0').textContent;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;

  document.getElementById('name--1').textContent;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  current0 = 0;
  current1 = 0;
  player = false;
  if (!playerActive0.classList.contains('player--active')) {
    playerActive1.classList.remove('player--active');
    playerActive0.classList.add('player--active');
  }
};

rollDice.addEventListener('click', diceRoll);
holdScore.addEventListener('click', finalScore);
newGame.addEventListener('click', reset);
