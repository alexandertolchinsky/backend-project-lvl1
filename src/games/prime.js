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
  for (let i = 0; i < engine.roundsCount; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine.playGame(questionsAndAnswers, description);
};
