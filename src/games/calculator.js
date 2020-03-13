import * as index from '../index.js';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomKey = Math.floor(Math.random() * signs.length);
  return signs[randomKey];
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const firstRandomNumber = index.getRandomNumber();
    const secondRandomNumber = index.getRandomNumber();
    const sign = getRandomSign();
    const question = `${firstRandomNumber} ${sign} ${secondRandomNumber}`;
    let correctAnswer;
    switch (sign) {
      case '+':
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case '-':
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      case '*':
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        break;
    }
    questions.push([question, String(correctAnswer)]);
  }
  return questions;
};

export default () => {
  const questions = getQuestions();
  index.runGame(questions);
};
