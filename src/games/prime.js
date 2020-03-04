import * as index from '../index.js';

export default () => {
  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const correctAnswer = index.isPrimeNumber(randomNumber) ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};
