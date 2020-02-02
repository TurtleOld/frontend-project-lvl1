import data from '../index';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (b) {
    const c = a % b;
    return nod(b, c);
  } return a;
};

const gameNod = () => {
  const num1 = randomNum(100, 1);
  const num2 = randomNum(100, 1);

  const question = `${num1} ${num2}`;
  const answer = String(nod(num1, num2));

  return [question, answer];
};

export default () => data(gameNod, description);
