import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  const minimalDelimiter = num / 2;
  for (let i = 2; i <= minimalDelimiter; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getExpectedAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateRounds = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const expression = generateRandomNum();
    const expectedAnswer = getExpectedAnswer(expression);
    rounds.push([expression, expectedAnswer]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
