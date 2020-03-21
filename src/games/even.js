import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundsCount; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    questionsAndAnswers.push([question, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine.playGame(questionsAndAnswers, description);
};
