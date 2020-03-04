import * as index from '../index.js';

export default () => {

  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const firstRandomNumber = index.getRandomNumber();
    const secondRandomNumber = index.getRandomNumber();
    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    const correctAnswer = String(index.getGCD(firstRandomNumber, secondRandomNumber));
    questions.push([question, correctAnswer]);
  }
  return questions;
};
