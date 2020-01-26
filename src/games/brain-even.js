/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import {
  greeting,
  randomTwoNum,
  successfully,
} from '../index';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

greeting(desc);
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log();

const gameEven = (rounds = 3) => {
  let count = 1;
  for (; count <= rounds; count += 1) {
    const isEven = (num) => {
      if (num % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    const result = randomTwoNum(100, 1);
    console.log(`Question: ${result}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(isEven(result))) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${isEven()}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  successfully(userName);
};

export { gameEven as default };
