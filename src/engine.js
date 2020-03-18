import readlineSync from 'readline-sync';

export const roundCount = 3;

export const runGame = (questionsAndAnswers = []) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (questionsAndAnswers.toString() !== '') {
    let correctAnswers = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const questionAndAnswer of questionsAndAnswers) {
      const [question, correctAnswer] = questionAndAnswer;
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      if (correctAnswer === answer) {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        break;
      }
    }
    if (correctAnswers === roundCount) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
};
