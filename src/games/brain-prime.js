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

const gamePrime = () => {
  const result = randomNum(100, 1);
  const answer = isPrime(result) ? 'yes' : 'no';

  return [result, answer];
};

export default () => data(gamePrime, description);
