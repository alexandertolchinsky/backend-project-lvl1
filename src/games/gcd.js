import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

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

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundsCount; i += 1) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();
    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    const correctAnswer = String(getGCD(firstRandomNumber, secondRandomNumber));
    questionsAndAnswers.push([question, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  const description = 'Find the greatest common divisor of given numbers.';
  engine.playGame(questionsAndAnswers, description);
};
