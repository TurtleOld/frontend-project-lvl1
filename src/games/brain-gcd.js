import readlineSync from 'readline-sync';
import { greeting, hello } from '../index';

const desc = 'Find the greatest common divisor of given numbers.';

greeting(desc);

const userName = readlineSync.question('May I have your name? ');
hello(userName);

const gameNod = (rounds = 3) => {
  let count = 1;
  for (; count < rounds; count += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);

    const nod = (n, m) => {
      if(m > 0) { 
        var k = n % m;
        return nod(m, k); 
    } else { 
      return Math.abs(n);  
      }
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