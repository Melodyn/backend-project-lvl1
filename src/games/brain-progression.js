import { generateRandomNum } from '../helpers.js';
import { run, standardRoundsCount } from '../index.js';

const description = 'What number is missing in the progression?';

const generateSequence = (start, step = 1, length = 10) => {
  const sequence = [];
  const lastNumber = step * length + start;

  for (let i = start; i < lastNumber; i += step) {
    sequence.push(i);
  }

  return sequence;
};

const replaceRandomItem = (items, replacer = '..') => {
  const removedIndex = generateRandomNum(0, items.length);
  const removedItem = items[removedIndex];
  const processedItems = items.map((n, i) => ((i === removedIndex) ? replacer : n));

  return [removedItem, processedItems];
};

const generateRounds = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const start = generateRandomNum();
    const step = generateRandomNum(2);
    const sequence = generateSequence(start, step);
    const [expectedAnswer, processedSequence] = replaceRandomItem(sequence);
    const expression = processedSequence.join(' ');
    rounds.push([expression, `${expectedAnswer}`]);
  }

  return rounds;
};

export default () => run(description, generateRounds(standardRoundsCount));
