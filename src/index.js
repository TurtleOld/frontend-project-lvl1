#!/usr/bin/env node

import readlineSync from 'readline-sync';


const startGame = (description) => {
  console.log("Welcome to the Brain Games!");
  console.log(description);
  console.log();

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}`);
  console.log();

}

export default startGame;
