import data from '../index';
import randomNum from '../utils';

const desc = 'Find the greatest common divisor of given numbers.';

const gameProgress = () => {
  const startPosition = randomNum(10, 1);
  const step = randomNum(10, 2);
  const a = 10;
  const index = randomNum(a - 1, 0);

  const progressionGenerated = () => {
    let progression = '';
    for (let i = 0; i < a; i += 1) {
      if (i === index) {
        progression = `${progression}.. `;
      } else {
        progression = `${progression}${startPosition + step * i} `;
      }
    }
    return progression;
  };

  const result = progressionGenerated();
  const answer = startPosition + step * index;

  return [result, answer];
};

export default () => data(gameProgress, desc);
