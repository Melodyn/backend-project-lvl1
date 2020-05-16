import { generateRandomNum, expressionToString } from '../src/helpers.js';

export const description = 'Find the greatest common divisor of given numbers.';

const generateRandomSequence = (min = 10, max = 100) => {
  const num1 = generateRandomNum(min, max);
  const num2 = generateRandomNum(min, max);
  return num1 > num2 ? [num2, num1] : [num1, num2];
};

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

export const game = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const [num1, num2] = generateRandomSequence();
    const expression = expressionToString('', num2, num1);
    const expectedAnswer = findGCD(num2, num1);
    rounds.push([expression, `${expectedAnswer}`]);
  }

  return rounds;
};
