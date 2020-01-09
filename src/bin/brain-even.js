#!/usr/bin/env node

import readlineSync from 'readline-sync';

const games = (rounds = 3) => {
  console.log('Welcome to the Brain Games!');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  console.log();

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  console.log();
  const numberQuestion = readlineSync.question(`Question: ${Math.floor(Math.random() * 100)}`);
  const yourAnswer = readlineSync.question('Your answer: ');

  const primeCheck = () => {
    if (numberQuestion % 2) {
      return 'yes';
    }
    return 'no';
  };
  let count = 1;
  for (; count <= rounds; count += 1) {
    if (yourAnswer === String(primeCheck)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${primeCheck()}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};
export default games();
