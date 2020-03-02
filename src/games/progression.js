import * as index from '../index.js';

export default () => {
  index.greet();
  const name = index.askName();
  console.log('What number is missing in the progression?');
  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const progression = index.getProgression();
    const randomKey = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[randomKey];
    progression[randomKey] = '..';
    questions.push([progression.join(' '), String(correctAnswer)]);
  }
  const correctAnswerCount = index.getCorrectAnswerCount(questions);
  index.showResult(correctAnswerCount, name);
};
