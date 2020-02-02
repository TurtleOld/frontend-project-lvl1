import data from '../index';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const symbol = ['+', '-', '*'];
const randomNum1 = Math.floor(Math.random() * 100);
const randomNum2 = Math.floor(Math.random() * 100);
const number = randomNum(0, symbol.length);
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

const gameCalc = () => {
  const result = `${randomNum1} ${sign} ${randomNum2}`;
  const answer = `${symbolSign()}`;

  return [result, answer];
};


export default () => data(gameCalc, description);
