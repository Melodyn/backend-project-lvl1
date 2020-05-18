import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getExpectedAnswer = (num, modulo = 2) => ((num % modulo === 0) ? 'yes' : 'no');

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
