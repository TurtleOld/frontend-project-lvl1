import readlineSync from 'readline-sync';

export const greeting = (desc) => {
  console.log('Welcome to the Brain Games!');
  console.log(desc);
  console.log();
};

export const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
};

export const randomOneNum = Math.floor(Math.random() * 100);

export const randomTwoNum = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const ifcorrectAnswer = console.log('Correct!');

export const successfully = () => console.log(`Congratulation, ${userName}!`);

export const rounds = 3;
// export default greeting;
