import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const getRandomOperator = (operators) => operators[generateRandomNum(0, operators.length - 1)];

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

const generateRounds = (totalRoundsCount = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRoundsCount; i += 1) {
    const num1 = generateRandomNum(0, 9);
    const num2 = generateRandomNum(0, 9);
    const operator = getRandomOperator(mathOperators);
    const expression = `${num1} ${operator} ${num2}`;
    const expectedAnswer = calc(operator, num1, num2);
    rounds.push([expression, String(expectedAnswer)]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
