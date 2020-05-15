const generateRandomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);
const getExpectedAnswer = (num, modulo = 2) => ((num % modulo === 0) ? 'yes' : 'no');

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const game = (totalRounds = 3) => {
  const rounds = [];

  for (let i = 1; i <= totalRounds; i += 1) {
    const randomNum = generateRandomNum();
    const expectedAnswer = getExpectedAnswer(randomNum);
    rounds.push([randomNum, expectedAnswer]);
  }

  return rounds;
};
