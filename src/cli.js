import readline from 'readline-sync';

export default async () => {
  const name = await readline.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};
