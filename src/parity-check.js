import readlineSync from 'readline-sync';

const isCorrectAnswer = (correctAnswer, answer) => {
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  let answer;
  let correctAnswer;
  do {
    correctAnswerCount += 1;
    const randomNumber = Math.floor(Math.random() * 100);
    correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question('Your answer: ');
  } while (isCorrectAnswer(correctAnswer, answer) && correctAnswerCount < 3);
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};
