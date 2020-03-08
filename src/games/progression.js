import * as index from '../index.js';

const getProgression = () => {
  const randomNumber = index.getRandomNumber();
  const result = [randomNumber];
  for (let i = 1; i <= 10; i += 1) {
    result.push(randomNumber + i);
  }
  return result;
};

export default () => {
  index.greet();
  const name = index.askName();
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const progression = getProgression();
    const randomKey = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[randomKey];
    progression[randomKey] = '..';
    questions.push([progression.join(' '), String(correctAnswer)]);
  }
  const correctAnswerCount = index.getCorrectAnswerCount(questions);
  index.showResult(correctAnswerCount, name);
};
