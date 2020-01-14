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

export const randomNum = Math.floor(Math.random() * 100);
export const randomNum1 = Math.floor(Math.random() * 100);
export const randomNum2 = Math.floor(Math.random() * 100);

// export default greeting;
