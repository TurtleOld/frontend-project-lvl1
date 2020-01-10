import readlineSync from 'readline-sync';
import startGame from '..';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const games = (rounds = 3) => {
  
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
export default () => startGame(description, games);
