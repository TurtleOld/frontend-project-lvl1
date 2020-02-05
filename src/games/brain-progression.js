import data from '../index';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const progressionLength = 10;

const getGenerationProgression = (startPosition, step, index) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === index) {
      progression = `${progression}.. `;
    } else {
      progression = `${progression}${startPosition + step * i} `;
    }
  }
  return progression;
};

const createGameProgression = () => {
  const startPosition = randomNum(10, 1);
  const step = randomNum(10, 2);
  const index = randomNum(progressionLength - 1, 0);

  const question = String(getGenerationProgression());
  const answer = getGenerationProgression(startPosition + step * index);

  return [question, answer];
};

export default () => data(createGameProgression, description);
