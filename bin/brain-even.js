#!/usr/bin/env node
import * as index from '../src/index.js';
import getQuestions from '../src/games/parity-check.js';

index.greet();
const name = index.askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const questions = getQuestions();
const correctAnswerCount = index.getCorrectAnswerCount(questions);
index.showResult(correctAnswerCount, name);
