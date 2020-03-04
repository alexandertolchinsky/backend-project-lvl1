import * as index from '../index.js';

export default () => {
  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};
