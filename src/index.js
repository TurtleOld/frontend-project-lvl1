import readlineSync from 'readline-sync';

export const data = (desc) => {
  console.log('Welcome to the Brain Games!')
  console.log(desc);
  console.log();
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log();
}

export const randomOneNum = Math.floor(Math.random() * 100);

export const answer = () => readlineSync.question('Your answer: ');

export const randomTwoNum = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const successfully = (user) => console.log(`Congratulation, ${data(user)}!`);

export const rounds = 3;
