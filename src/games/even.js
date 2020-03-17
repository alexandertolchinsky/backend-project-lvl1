import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundCount; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    questionsAndAnswers.push([randomNumber, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  engine.runGame(questionsAndAnswers);
};
