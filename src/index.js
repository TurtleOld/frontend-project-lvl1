import readlineSync from 'readline-sync';

const rounds = 3;
const startEngine = (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log();

  const iteration = (count) => {
    if (count > rounds) {
      console.log(`Congratulation, ${user}!`);
      return;
    }

    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${answer}.\nLet\`s try again, ${user}!`);
      return;
    }

    iteration(count + 1);
  };

  iteration(1);
};

export default startEngine;
