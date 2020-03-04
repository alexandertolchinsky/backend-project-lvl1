#!/usr/bin/env node
import * as index from '../src/index.js';
import getQuestions from '../src/games/calculator.js';

index.greet();
const name = index.askName();
console.log('What is the result of the expression?');
const questions = getQuestions();
const correctAnswerCount = index.getCorrectAnswerCount(questions);
index.showResult(correctAnswerCount, name);
