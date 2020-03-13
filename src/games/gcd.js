import * as index from '../index.js';

const getGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a > 0 && b > 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const firstRandomNumber = index.getRandomNumber();
    const secondRandomNumber = index.getRandomNumber();
    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    const correctAnswer = String(getGCD(firstRandomNumber, secondRandomNumber));
    questions.push([question, correctAnswer]);
  }
  return questions;
};

export default () => {
  const questions = getQuestions();
  index.runGame(questions);
};
