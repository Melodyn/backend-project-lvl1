import { generateRandomNum, expressionToString } from '../src/helpers.js';

export const description = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const getRandomOperator = (operators) => operators[generateRandomNum(0, operators.length)];

const calc = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

export const game = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const num1 = generateRandomNum(0, 10);
    const num2 = generateRandomNum(0, 10);
    const operator = getRandomOperator(mathOperators);
    const expression = expressionToString(operator, num1, num2);
    const expectedAnswer = calc(operator, num1, num2);
    rounds.push([expression, `${expectedAnswer}`]);
  }

  return rounds;
};
