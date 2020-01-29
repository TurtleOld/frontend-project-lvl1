import readlineSync from 'readline-sync';

const rounds = 3;
const data = (questionAnswer, desc) => {
  console.log('Welcome to the Brain Games!');
  console.log(desc);
  console.log();
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log();

  const iteration = (count) => {
    const [question, answer] = questionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${answer}.\nLet\`s try again, ${user}!`);
    }

    if (count > rounds) {
      console.log(`Congratulation, ${user}!`);
    }
  };

  return iteration();
};

export default data;
