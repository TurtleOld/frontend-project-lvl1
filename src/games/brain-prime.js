import startEngine from '../index';
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

const genGameData = () => {
  const question = String(randomNum(1, 100));
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startEngine(genGameData, description);
