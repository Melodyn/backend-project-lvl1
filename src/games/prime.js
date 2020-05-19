import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  const maxDivisor = num / 2;
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getExpectedAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateRounds = (totalRoundsCount = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRoundsCount; i += 1) {
    const expression = generateRandomNum(0, 99);
    const expectedAnswer = getExpectedAnswer(expression);
    rounds.push([expression, expectedAnswer]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
