#!/usr/bin/env node

import readlineSync from 'readline-sync';

const hello = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

export { hello as default };
