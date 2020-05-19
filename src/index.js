import readlineSync from 'readline-sync';

export const standardRoundsCount = 3;

export const run = (description, rounds) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [quest, expectedAnswer] of rounds) {
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== expectedAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
