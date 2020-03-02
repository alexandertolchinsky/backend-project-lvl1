import * as index from '../index.js';

export default () => {
  index.greet();
  const name = index.askName();
  console.log('Find the greatest common divisor of given numbers.');
  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const firstRandomNumber = index.getRandomNumber();
    const secondRandomNumber = index.getRandomNumber();
    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    const correctAnswer = index.getGCD(firstRandomNumber, secondRandomNumber);
    questions.push([question, String(correctAnswer)]);
  }
  const correctAnswerCount = index.getCorrectAnswerCount(questions);
  index.showResult(correctAnswerCount, name);
};
