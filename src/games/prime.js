import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
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

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundCount; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    questionsAndAnswers.push([randomNumber, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  engine.runGame(questionsAndAnswers);
};
