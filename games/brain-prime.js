import { generateRandomNum } from '../src/helpers.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 4) return true;

  let delimiter = num - 1;
  while (num % delimiter !== 0) {
    delimiter -= 1;
  }

  return delimiter === 1;
};

const getExpectedAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

export const game = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const expression = generateRandomNum();
    const expectedAnswer = getExpectedAnswer(expression);
    rounds.push([expression, expectedAnswer]);
  }

  return rounds;
};
