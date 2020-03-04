#!/usr/bin/env node
import * as index from '../src/index.js';
import getQuestions from '../src/games/progression.js';

index.greet();
const name = index.askName();
console.log('What number is missing in the progression?');
const questions = getQuestions();
const correctAnswerCount = index.getCorrectAnswerCount(questions);
index.showResult(correctAnswerCount, name);
