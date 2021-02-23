'use strict';

const rollDice = document.getElementById('roll-dice');
const holdScore = document.getElementById('hold-dice');
const newGame = document.getElementById('new-game');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');

let player = false;

let diceNumber = 0;

let score0 = Number((document.getElementById('score--0').textContent = 0));
let current0 = Number(document.getElementById('current--0').textContent);

let score1 = Number((document.getElementById('score--1').textContent = 0));
let current1 = Number(document.getElementById('current--1').textContent);

const diceRoll = function () {
  diceNumber = Math.trunc(Math.random() * 6) + 1;

  document.querySelector('.dice').src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    if (playerActive0.classList.contains('player--active')) {
      console.log('player0');
      current0 += diceNumber;
      document.getElementById('current--0').textContent = current0;
      current1 = 0;
    }
    score0 = Number(document.getElementById('current--0').textContent);
    if (playerActive1.classList.contains('player--active')) {
      console.log('player1');
      current1 += diceNumber;
      document.getElementById('current--1').textContent = current1;
      current0 = 0;
    }
    score1 = Number(document.getElementById('current--1').textContent);
  } else {
    player = !player;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    if (!playerActive0.classList.contains('player--active')) {
      playerActive1.classList.remove('player--active');
      playerActive0.classList.add('player--active');
    } else {
      playerActive0.classList.remove('player--active');
      playerActive1.classList.add('player--active');
    }
  }
};

const playerSwitch = function () {
  if (diceNumber === 1) {
    current0 = 0;
    current1 = 0;
    console.log('switching');
    if (playerActive0.classList.contains('player--active')) {
      console.log('player0');
      current0 += diceNumber;
      document.getElementById('current--0').textContent = current0;
      current1 = 0;
    }
    score0 = Number(document.getElementById('current--0').textContent);
    if (playerActive1.classList.contains('player--active')) {
      console.log('player1');
      current1 += diceNumber;
      document.getElementById('current--1').textContent = current1;
      current0 = 0;
    }
    score1 = Number(document.getElementById('current--1').textContent);
  }

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  playerActive1.classList.toggle('player--active');
  playerActive0.classList.toggle('player--active');
};

const finalScore = function () {
  playerActive1.classList.toggle('player--active');
  playerActive0.classList.toggle('player--active');

  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;

  if (playerActive0.classList.contains('player--active')) {
    document.getElementById('score--0').textContent =
      Number(document.getElementById('score--0').textContent) + score0;
    document.getElementById('current--1').textContent = 0;
  }
  if (playerActive1.classList.contains('player--active')) {
    document.getElementById('score--1').textContent =
      Number(document.getElementById('score--1').textContent) + score1;
    score0 = 0;
    document.getElementById('current--0').textContent = 0;
  }

  player = !player;
};

const reset = function () {
  current0 = 0;
  current1 = 0;

  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;

  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  player = false;
  if (!playerActive0.classList.contains('player--active')) {
    playerActive1.classList.toggle('player--active');
    playerActive0.classList.toggle('player--active');
  }
};

rollDice.addEventListener('click', diceRoll);
holdScore.addEventListener('click', playerSwitch);
newGame.addEventListener('click', reset);
let x = 0;
console.log((x = x === 0 ? 1 : 0)); //0
console.log((x = x === 0 ? 1 : 0)); //1
console.log((x = x === 0 ? 1 : 0)); //0
console.log((x = x === 0 ? 1 : 0)); //1
console.log((x = x === 0 ? 1 : 0)); //0
console.log((x = x === 0 ? 1 : 0)); //1
console.log((x = x === 0 ? 1 : 0)); //0
