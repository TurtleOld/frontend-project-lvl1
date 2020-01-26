import readlineSync from 'readline-sync';
import {
  greeting,
  hello,
  rounds,
  successfully,
  randomTwoNum,
} from '../index';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

greeting(desc);

const userName = readlineSync.question('May I have your name? ');
hello(userName);

const gamePrime = () => {
  let count = 1;
  for (; count <= rounds; count += 1) {
    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= (num / 2); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const result = randomTwoNum(100, 1);
    const correctAnswer = isPrime(result) ? 'yes' : 'no';
    console.log(`Question: ${result}`);
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

export { gamePrime as default };
