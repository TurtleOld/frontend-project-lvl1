import data from '../index';
import randomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;


const createGameEven = () => {
  const question = String(randomNum(100, 1));
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => data(createGameEven, description);
