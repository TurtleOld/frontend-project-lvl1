import data from '../index';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const symbol = ['+', '-', '*'];

const getSign = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const createGameCalc = () => {
  const randomNum1 = randomNum(100, 1);
  const randomNum2 = randomNum(100, 1);
  const number = randomNum(0, symbol.length);
  const sign = (symbol[parseInt(number, 0)]);
  const question = `${randomNum1} ${sign} ${randomNum2}`;
  const answer = String(getSign(randomNum1, randomNum2, sign));

  return [question, answer];
};


export default () => data(createGameCalc, description);
