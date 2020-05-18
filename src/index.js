import readlineSync from 'readline-sync';

export const standardRoundsCount = 3;

export const run = (description, rounds) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  const winEndGameMessage = `Congratulations, ${name}!`;
  const loseEndGameMessage = `Let's try again, ${name}!`;
  let endGameMessage = winEndGameMessage;

  console.log(`Hello, ${name}!`);
  console.log(description);

  rounds.every(([quest, expectedAnswer]) => {
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== expectedAnswer) {
      endGameMessage = `"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"\n${loseEndGameMessage}`;
      return false;
    }
    console.log('Correct!');
    return true;
  });

  console.log(endGameMessage);
};
