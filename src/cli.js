import readline from 'readline-sync';

export default () => {
  const name = readline.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};
