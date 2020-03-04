import * as index from '../index.js';

export default () => {
  index.greet();
  const name = index.askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const questions = [];
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const randomNumber = index.getRandomNumber();
    const correctAnswer = index.isPrimeNumber(randomNumber) ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  const correctAnswerCount = index.getCorrectAnswerCount(questions);
  index.showResult(correctAnswerCount, name);
};
