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
    const progression = getProgression(start, step);
    const randomKey = getRandomNumber(0, progression.length - 1);
    const correctAnswer = String(progression[randomKey]);
    const question = getQuestion(progression, randomKey);
    questionsAndAnswers.push([question, correctAnswer]);
  }
  return questionsAndAnswers;
};

export default () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  const description = 'What number is missing in the progression?';
  engine.playGame(questionsAndAnswers, description);
};
