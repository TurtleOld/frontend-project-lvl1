#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');  

console.log();

const questions = readlineSync.question('May I have your name? ');

console.log(`Hello, ${questions}`);
console.log();
const numberQuestion = readlineSync.question(`Question: ${Math.floor(Math.random() * 100)}`);
const yourAnswer = readlineSync.question('Your answer: ');

const parity = () => (numberQuestion / 2) ? 'yes' : 'no';

console.log(parity())