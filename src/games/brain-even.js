import data from '../index';
import randomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameEven = () => {
  const result = randomNum(100, 1);
  const answer = isEven(result);

  return [result, answer];
};

export default () => data(gameEven, description);
