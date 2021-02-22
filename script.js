'use strict';

const name1 = document.getElementById('name--0').textContent;
let score1 = Number(document.getElementById('score--0').textContent);
let current1 = Number(document.getElementById('current--0').textContent);

const name2 = document.getElementById('name--1').textContent;
let score2 = Number(document.getElementById('score--1').textContent);
let current2 = Number(document.getElementById('current--1').textContent);

// console.table(player1);
// console.table(player2);

// const newGame = (function () {
//   player1.score = 10;
// })();

// console.log(player1.score);

const diceRoll = function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  document.querySelector('.dice').src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    console.log('ok');
    current1 += diceNumber;
    console.log(current1);
    document.getElementById('current--0').textContent = current1;
    // = player1.score;
  }
};

const playerSwitch = function () {};

const rollDice = document.getElementById('roll-dice');
rollDice.addEventListener('click', diceRoll);
// console.log(diceNumer);
