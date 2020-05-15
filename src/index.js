import readlineSync from 'readline-sync';

export const standardRoundsCount = 3;

export const run = (description, game, totalRounds = standardRoundsCount) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  const winEndGameMessage = `Congratulations, ${name}!`;
  const loseEndGameMessage = `Let's try again, ${name}!`;

  console.log(`Hello, ${name}!`);

  if (!description) return true;
  console.log(description);

  const rounds = game(totalRounds);

  const isWinner = rounds.every(([quest, expectedAnswer]) => {
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== expectedAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
      return false;
    }
    console.log('Correct!');
    return true;
  });

  const endGameMessage = isWinner ? winEndGameMessage : loseEndGameMessage;

  console.log(endGameMessage);
  return true;
};
