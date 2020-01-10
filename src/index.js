#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const greeting = (desc) => {
  console.log("Welcome to the Brain Games!");
  console.log(desc);
  console.log();
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log();

};