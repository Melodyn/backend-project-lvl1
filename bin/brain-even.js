#!/usr/bin/env node

import readlineSync from 'readline-sync';

import run from '../src/cli.js';
import { description, game } from '../games/brain-even.js';

const name = run();
const winEndGameMessage = `Congratulations, ${name}!`;
const loseEndGameMessage = `Let's try again, ${name}!`;
let endGameMessage = winEndGameMessage;

const rounds = game();
console.log(description);

// eslint-disable-next-line no-restricted-syntax
for (const [quest, expectedAnswer] of rounds) {
  console.log(`Question: ${quest}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() !== expectedAnswer) {
    endGameMessage = loseEndGameMessage;
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
    break;
  }
  console.log('Correct!');
}

console.log(endGameMessage);
