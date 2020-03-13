import * as index from '../index.js';

const isPrimeNumber = (number) => {
  if (number % 2 === 0) {
    return false;
  }
  if (number % 3 === 0) {
    return false;
  }
  if (number % 5 === 0) {
    return false;
  }
  let smallestDivisor = 1;
  for (let i = 7; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      smallestDivisor = i;
      break;
    }
  }
  return smallestDivisor === 1;
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
