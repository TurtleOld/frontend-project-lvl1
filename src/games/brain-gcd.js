import data from '../index';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  } return a;
};

const createGameGcd = () => {
  const num1 = randomNum(100, 1);
  const num2 = randomNum(100, 1);

  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));

  return [question, answer];
};

export default () => data(createGameGcd, description);
