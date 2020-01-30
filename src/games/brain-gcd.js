import data from '../index';
import randomNum from '../utils';

const desc = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (b) {
    const c = a % b;
    return nod(b, c);
  } return a;
};

const gameNod = () => {
  const num1 = randomNum(100, 1);
  const num2 = randomNum(100, 1);

  const result = `${num1} ${num2}`;
  const answer = nod(num1, num2);

  return [result, answer];
};

export default () => data(gameNod, desc);
