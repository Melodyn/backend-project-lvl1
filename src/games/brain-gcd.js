import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  const [largeNum, smallNum] = num1 > num2 ? [num1, num2] : [num2, num1];
  const iter = (currentDivisor) => {
    if ((largeNum % currentDivisor === 0) && (smallNum % currentDivisor === 0)) {
      return currentDivisor;
    }
    return iter(currentDivisor - 1);
  };

  return iter(smallNum);
};

const generateRounds = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const num1 = generateRandomNum(10);
    const num2 = generateRandomNum(10);
    const expression = `${num1} ${num2}`;
    const expectedAnswer = findGCD(num2, num1);
    rounds.push([expression, `${expectedAnswer}`]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
