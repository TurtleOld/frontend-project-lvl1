import data from '../index';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const progressionLength = 10;

const getGenerationProgression = (start, diff, hiddenIndex) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      progression = `${progression}.. `;
    } else {
      progression = `${progression}${start + diff * i} `;
    }
  }
  return progression;
};

const genGameData = () => {
  const startPosition = randomNum(10, 1);
  const step = randomNum(10, 2);
  const hideIndex = randomNum(progressionLength - 1, 0);

  const question = String(getGenerationProgression(startPosition, step, hideIndex));
  const answer = String(startPosition + step * hideIndex);

  return [question, answer];
};

export default () => data(genGameData, description);
