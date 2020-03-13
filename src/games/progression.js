import * as index from '../index.js';

const getProgression = (randomNumber) => {
  const result = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(randomNumber + i);
  }
  return result;
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const progression = getProgression(randomNumber);
    const randomKey = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[randomKey];
    progression[randomKey] = '..';
    questions.push([progression.join(' '), String(correctAnswer)]);
  }
  return questions;
};

export default () => {
  const questions = getQuestions();
  index.runGame(questions);
};
