import data from '../index';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const progressionLength = 10;

const genQuestion = (start, diff, hiddenIndex) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      progression = (`${progression}.. `);
    } else {
      progression = `${progression}${start + diff * i} `;
    }
  }
  return progression.trim();
};

const genGameData = () => {
  const startPosition = randomNum(1, 10);
  const step = randomNum(2, 10);
  const hideIndex = randomNum(0, progressionLength - 1);

  const question = genQuestion(startPosition, step, hideIndex);
  const answer = String(startPosition + step * hideIndex);

  return [question, answer];
};

export default () => data(genGameData, description);
