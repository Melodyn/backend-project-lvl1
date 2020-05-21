import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => (((b === 0) || (a === b)) ? a : findGCD(b, a % b));

const generateRounds = (totalRoundsCount = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRoundsCount; i += 1) {
    const num1 = generateRandomNum(10, 99);
    const num2 = generateRandomNum(10, 99);
    const expression = `${num1} ${num2}`;
    const expectedAnswer = findGCD(num2, num1);
    rounds.push([expression, String(expectedAnswer)]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
