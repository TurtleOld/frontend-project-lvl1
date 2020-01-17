import readlineSync from 'readline-sync';
import {
  greeting,
  hello,
  randomNum,
} from '../index';

const desc = 'Find the greatest common divisor of given numbers.';

greeting(desc);

const userName = readlineSync.question('May I have your name? ');
hello(userName);





const gameProgress = (rounds = 3) => {
  

  let count = 1;
  for (; count <= rounds; count += 1) {
    const startPosition = randomNum(10, 1);
    const step = randomNum(10, 2);
    const a = 10;
    const index = randomNum(a - 1, 0);
    let i = 0;
    const progressionGenerated = () => {
        
      let progression = '';
      for (; i < a; i += 1) {
        if (i === index) {
          progression = `${progression}.. `;
        } else {
          progression = `${progression}${startPosition + step * i} `;
        }
      }
      return progression;
    };
    const progressionTwo = progressionGenerated();
    console.log(`Question: ${progressionTwo}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(startPosition + step * index)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${String(startPosition + step * index)}.\nLet\`s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};

export { gameProgress as default };
