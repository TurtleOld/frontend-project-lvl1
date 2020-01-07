#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const welcome = console.log("Welcome to the Brain Games!");

export const userName = readlineSync.question("May I have your name? ");

