import * as index from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};

export default () => {
  const questions = getQuestions();
  index.runGame(questions);
};
