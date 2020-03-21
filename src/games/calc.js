import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomKey = getRandomNumber(0, signs.length - 1);
  return signs[randomKey];
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundsCount; i += 1) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();
    const sign = getRandomSign();
    const question = `${firstRandomNumber} ${sign} ${secondRandomNumber}`;
    let correctAnswer;
    switch (sign) {
      case '+':
        correctAnswer = String(firstRandomNumber + secondRandomNumber);
        break;
      case '-':
        correctAnswer = String(firstRandomNumber - secondRandomNumber);
        break;
      case '*':
        correctAnswer = String(firstRandomNumber * secondRandomNumber);
        break;
      default:
        break;
    }
    questionsAndAnswers.push([question, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  const description = 'What is the result of the expression?';
  engine.playGame(questionsAndAnswers, description);
};
