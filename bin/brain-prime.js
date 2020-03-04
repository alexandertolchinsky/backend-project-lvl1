#!/usr/bin/env node
import * as index from '../src/index.js';
import getQuestions from '../src/games/prime.js';

index.greet();
const name = index.askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const questions = getQuestions();
const correctAnswerCount = index.getCorrectAnswerCount(questions);
index.showResult(correctAnswerCount, name);
