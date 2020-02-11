import startEngine from '../index';
import randomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;


const genGameData = () => {
  const question = randomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

export default () => startEngine(genGameData, description);
