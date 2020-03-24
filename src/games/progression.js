import * as engine from '../engine.js';
import getRandomNumber from '../utils.js';

const progressionLength = 10;
const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (step * i));
  }
  return result;
};

const getQuestion = (progression, randomKey) => {
  const question = progression;
  question[randomKey] = '..';
  return question.join(' ');
};

const getQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < engine.roundsCount; i += 1) {
    const start = getRandomNumber();
    const step = getRandomNumber();
    const progression = getProgression(start, step, progressionLength);
    const randomKey = getRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[randomKey];
    const question = getQuestion(progression, randomKey);
    questionsAndAnswers.push([question, String(correctAnswer)]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  engine.playGame(questionsAndAnswers, description);
};
