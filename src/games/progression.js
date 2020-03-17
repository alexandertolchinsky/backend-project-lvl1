import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

const getProgression = (start, step) => {
  const result = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(start + (step * i));
  }
  return result;
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundCount; i += 1) {
    const start = getRandomNumber();
    const step = getRandomNumber();
    const progression = getProgression(start, step);
    const randomKey = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[randomKey];
    progression[randomKey] = '..';
    questionsAndAnswers.push([progression.join(' '), String(correctAnswer)]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  engine.runGame(questionsAndAnswers);
};
