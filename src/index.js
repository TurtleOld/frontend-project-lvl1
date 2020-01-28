export const greeting = (desc) => {
  console.log('Welcome to the Brain Games!');
  console.log(desc);
  console.log();
};

export const hello = (userName) => {
  console.log(`Hello, ${userName}!`);
  console.log();
};

export const randomOneNum = Math.floor(Math.random() * 100);

export const randomTwoNum = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const ifcorrectAnswer = console.log('Correct!');

export const successfully = (userName) => console.log(`Congratulation, ${userName}!`);

export const rounds = 3;
// export default greeting;
