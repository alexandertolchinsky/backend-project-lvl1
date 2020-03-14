import * as index from '../index.js';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};

export default () => {
  const questions = getQuestions();
  index.runGame(questions);
};
