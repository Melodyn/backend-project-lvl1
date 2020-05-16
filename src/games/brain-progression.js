import { generateRandomNum } from '../helpers.js';

export const description = 'What number is missing in the progression?';

const generateSequence = (start, step = 1, length = 10) => {
  const sequence = [start];

  for (let i = 1; i < length; i += 1) {
    const [prevNum] = sequence;
    sequence.unshift(prevNum + step);
  }

  return sequence.reverse();
};

const replaceRandomItem = (items, replacer = '..') => {
  const removeIndex = generateRandomNum(0, items.length);
  const removedItem = items[removeIndex];
  const processedItems = items.map((n, i) => ((i === removeIndex) ? replacer : n));

  return [removedItem, processedItems];
};

export const game = (totalRounds = 3) => {
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
