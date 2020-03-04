#!/usr/bin/env node
import * as index from '../src/index.js';
import getQuestions from '../src/games/gcd.js';

index.greet();
const name = index.askName();
console.log('Find the greatest common divisor of given numbers.');
const questions = getQuestions();
const correctAnswerCount = index.getCorrectAnswerCount(questions);
index.showResult(correctAnswerCount, name);
