import readlineSync from 'readline-sync';
import {
  greeting,
  hello,
  randomTwoNum,
  successfully,
} from '../index';

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
    const numTwo = `${randomTwoNum(100, 1)} ${randomTwoNum(100, 1)}`;
    console.log(`Question: ${numTwo}`);
    const correctAnswer = nod(randomTwoNum(100, 1), randomTwoNum(100, 1));
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  successfully(userName);
};

export { gameNod as default };
