#!/usr/bin/env node

export const greeting = (desc) => {
  console.log('Welcome to the Brain Games!');
  console.log(desc);
  console.log();
};

export const hello = (userName) => {
  console.log(`Hello, ${userName}!`);
  console.log();
};

export const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const ifcorrectAnswer = console.log('Correct!');

export const successfully = (userName) => console.log(`Congratulation, ${userName}!`);
// export default greeting;
