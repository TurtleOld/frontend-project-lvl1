import readlineSync from 'readline-sync';
import { greeting, hello, randomNum1, randomNum2 } from '../index';

const desc = 'Find the greatest common divisor of given numbers.';

greeting(desc);

const userName = readlineSync.question('May I have your name? ');
hello(userName);

const gameNod = (rounds = 3) => {
  let count = 1;
  for (; count <= rounds; count += 1) {
    const nod = (a, b) => {
      if (b > 0) {
        const c = a % b;
        return nod(b, c);
      } return Math.abs(a);
    };
    const numTwo = `${randomNum1} ${randomNum2}`
    console.log(`Question: ${numTwo}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(nod(randomNum1, randomNum2))) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${nod(randomNum1, randomNum2)}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};

export { gameNod as default };
