import {
  // greeting,
  // hello,
  data,
  welcome,
  randomTwoNum,
  successfully,
  user,
  answer,
} from '../index';


const desc = 'What is the result of the expression?';

data(desc);
// greeting(desc);
// hello();

const gameCalc = (rounds = 3) => {
  let count = 1;
  for (; count <= rounds; count += 1) {
    const symbol = ['+', '-', '*'];
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const number = randomTwoNum(0, symbol.length);
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
    const yourAnswer = answer;
    if (yourAnswer === String(symbolSign())) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${symbolSign()}.\nLet\`s try again, ${user}!`);
      return;
    }
  }
  successfully();
};

export { gameCalc as default };
