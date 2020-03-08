import * as index from '../index.js';

export default () => {
  index.greet();
  const name = index.askName();
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  const correctAnswerCount = index.getCorrectAnswerCount(questions);
  index.showResult(correctAnswerCount, name);
};
