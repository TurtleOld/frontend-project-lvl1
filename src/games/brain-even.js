/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import greeting from '../index';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';


greeting(desc);
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log();

const gameEven = (rounds = 3) => {
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  let count = 1;
  for (; count <= rounds; count += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(isEven(randomNum))) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${isEven()}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};

export { gameEven as default };
