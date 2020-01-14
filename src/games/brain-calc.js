/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import { greeting, hello, randomNum1, randomNum2 } from '../index';

const desc = 'What is the result of the expression?';

greeting(desc);
const userName = readlineSync.question('May I have your name? ');
hello(userName);

const gameCalc = (rounds = 3) => {
  let count = 1;
  for (; count <= rounds; count += 1) {
    const symbol = ['+', '-', '*'];
    const action = (max, min) => Math.random() * (max - min) + min;
    const number = action(0, symbol.length);
    const sign = (symbol[parseInt(number, 0)]);
    const symbolSign = () => {
      if (sign === symbol[0]) {
        return randomNum1 + randomNum2;
      }
      if (sign === symbol[1]) {
        return randomNum1 - randomNum2;
      }
      if (sign === symbol[2]) {
        return randomNum1 * randomNum2;
      }
      return symbolSign;
    };

    const result = `${randomNum1} ${sign} ${randomNum2}`;
    console.log(`Question: ${result}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(symbolSign())) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${symbolSign()}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};

export { gameCalc as default };
