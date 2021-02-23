'use strict';

const rollDice = document.getElementById('roll-dice');
const holdScore = document.getElementById('hold-dice');
const newGame = document.getElementById('new-game');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.dice').style.display = 'None';
let player = 0,
  dice,
  totalScore = [0, 0],
  currentScore = [0, 0];

const activePlayer = function () {
  algo();
  player = player === 0 ? 1 : 0;
  playerActive1.classList.toggle('player--active');
  playerActive0.classList.toggle('player--active');
};

holdScore.disabled = true;
holdScore.addEventListener('click', activePlayer);

const diceRoll = function () {
  document.querySelector('.dice').style.display = 'inline';
  holdScore.disabled = false;

  dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore[player] =
      Number(document.getElementById(`current--${player}`).textContent) + dice;
    document.getElementById(`current--${player}`).textContent =
      currentScore[player];
  } else {
    currentScore[player] = 0;
    algo();
    activePlayer();
  }
};

const gameOver = function (totalScore) {
  if (totalScore[0] >= 100) {
    playerActive0.classList.toggle('player--winner');
  } else playerActive1.classList.toggle('player--winner');
  document.querySelector('.dice').classList.add('hidden');
  holdScore.disabled = true;
  rollDice.disabled = true;
  document.querySelector('.dice').style.display = 'None';
};

const algo = function () {
  document.getElementById(`current--${player}`).textContent = 0;
  totalScore[player] += currentScore[player];
  document.getElementById(`current--${player}`).textContent = 0;
  document.getElementById(`score--${player}`).textContent = totalScore[player];
  dice = 0;
  currentScore[player] = 0;
  if (totalScore[0] >= 100 || totalScore[1] >= 100) gameOver(totalScore);
};

const reset = function () {
  document.querySelector('.dice').style.display = 'None';

  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;

  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  currentScore = [0, 0];
  totalScore = [0, 0];

  if (!playerActive0.classList.contains('player--active')) {
    playerActive1.classList.toggle('player--active');
    playerActive0.classList.toggle('player--active');
  }
  if (playerActive0.classList.contains('player--winner'))
    playerActive0.classList.remove('player--winner');
  if (playerActive1.classList.contains('player--winner'))
    playerActive1.classList.remove('player--winner');

  rollDice.disabled = false;
};

rollDice.addEventListener('click', diceRoll);
newGame.addEventListener('click', reset);
