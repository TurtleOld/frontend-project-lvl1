import data from '../index';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
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

const genGameData = () => {
  const randomNum1 = randomNum(100, 1);
  const randomNum2 = randomNum(100, 1);
  const randomIndex = randomNum(symbols.length - 1, 0);
  const sign = (symbols[randomIndex]);
  const question = `${randomNum1} ${sign} ${randomNum2}`;
  const answer = String(calculate(randomNum1, randomNum2, sign));

  return [question, answer];
};


export default () => data(genGameData, description);
