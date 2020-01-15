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

// export default greeting;
