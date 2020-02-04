import data from '../index';
import randomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createGamePrime = () => {
  const question = String(randomNum(100, 1));
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => data(createGamePrime, description);
