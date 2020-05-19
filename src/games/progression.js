import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'What number is missing in the progression?';

const generateSequence = (start, step = 1, length = 10) => {
  const sequence = [];

  for (let i = 1; i <= length; i += 1) {
    const item = step * i + start;
    sequence.push(item);
  }

  return sequence;
};

const replaceItem = (items, index, replacer = '..') => {
  const itemsCopy = items.slice();
  itemsCopy[index] = replacer;
  return itemsCopy;
};

const generateRounds = (totalRoundsCount = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRoundsCount; i += 1) {
    const start = generateRandomNum(0, 99);
    const step = generateRandomNum(2, 99);

    const sequence = generateSequence(start, step);
    const indexOfReplacedItem = generateRandomNum(0, sequence.length - 1);
    const processedSequence = replaceItem(sequence, indexOfReplacedItem);

    const expression = processedSequence.join(' ');
    const expectedAnswer = sequence[indexOfReplacedItem];
    rounds.push([expression, String(expectedAnswer)]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
