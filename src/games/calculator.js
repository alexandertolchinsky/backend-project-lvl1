import * as index from '../index.js';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomKey = Math.floor(Math.random() * signs.length);
  return signs[randomKey];
};

export default () => {
  index.greet();
  const name = index.askName();
  const questions = [];
  for (let i = 0; i < index.roundCount; i += 1) {
    const firstRandomNumber = index.getRandomNumber();
    const secondRandomNumber = index.getRandomNumber();
    const sign = getRandomSign();
    const question = `${firstRandomNumber} ${sign} ${secondRandomNumber}`;
    let correctAnswer = 0;
    switch (sign) {
      case '+':
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case '-':
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      case '*':
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        break;
    }
    questions.push([question, String(correctAnswer)]);
  }
  const correctAnswerCount = index.getCorrectAnswerCount(questions);
  index.showResult(correctAnswerCount, name);
};
