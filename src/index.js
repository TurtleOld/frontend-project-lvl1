import readlineSync from 'readline-sync';

// export const greeting = (desc) => {
//   console.log('Welcome to the Brain Games!');
//   console.log(desc);
//   console.log();
// };
// export const hello = () => {
//   const user = userName;
//   console.log(`Hello, ${user}!`);
//   console.log();
// };

export const data = (desc) => {
  const welcome = console.log('Welcome to the Brain Games!')
  console.log(desc);
  console.log();
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log();

}

export const randomOneNum = Math.floor(Math.random() * 100);

export const answer = readlineSync.question('Your answer: ');

export const randomTwoNum = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const successfully = () => console.log(`Congratulation, ${data()}!`);

export const rounds = 3;
// export default greeting;
