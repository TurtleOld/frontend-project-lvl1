import readlineSync from 'readline-sync';
import {
  greeting,
  hello,
  randomNum,
} from '../index';

const desc = 'Find the greatest common divisor of given numbers.';

greeting(desc);

const userName = readlineSync.question('May I have your name? ');
hello(userName);

const gameProgress = (rounds = 3) => {
  
};

export { gameProgress as default };
