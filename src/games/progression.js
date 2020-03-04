import * as index from '../index.js';

export default () => {
  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const progression = index.getProgression();
    const randomKey = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[randomKey];
    progression[randomKey] = '..';
    questions.push([progression.join(' '), String(correctAnswer)]);
  }
  return questions;
};
