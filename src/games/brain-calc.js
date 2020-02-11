import data from '../index';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

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
  const randomNum1 = randomNum(1, 100);
  const randomNum2 = randomNum(1, 100);
  const randomIndex = randomNum(0, operators.length - 1);
  const getOperator = (operators[randomIndex]);
  const question = `${randomNum1} ${getOperator} ${randomNum2}`;
  const answer = String(calculate(randomNum1, randomNum2, getOperator));

  return [question, answer];
};


export default () => data(genGameData, description);
