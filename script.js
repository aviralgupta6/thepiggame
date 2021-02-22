'use strict';

// let diceNumber = Math.trunc(Math.random() * 6) + 1;
// console.log(diceNumber);

// const player1 = {
//   name: document.getElementById('name--0').textContent,
//   score: (document.getElementById('score--0').textContent = 0),
//   current: (document.getElementById('current--0').textContent = 0),
// };

// const player2 = {
//   name: document.getElementById('name--1').textContent,
//   score: (document.getElementById('score--1').textContent = 0),
//   current: (document.getElementById('current--1').textContent = 0),
// };

// console.table(player1);
// console.table(player2);

// const newGame = (function () {
//   player1.score = 10;
// })();

// document.getElementById('score--0').textContent = player1.score;
// console.log(player1.score);

// document.querySelector('.dice').src = `dice-${diceNumber}.png`;

const rollDice = document.getElementById('roll-dice');
rollDice.addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log('click', diceNumber);
  document.querySelector('.dice').src = `dice-${diceNumber}.png`;
});
// console.log(rollDice);
