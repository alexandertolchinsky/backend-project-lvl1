import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const playGame = (questionsAndAnswers = [], description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  if (questionsAndAnswers.toString() !== '') {
    // eslint-disable-next-line no-restricted-syntax
    for (const [question, correctAnswer] of questionsAndAnswers) {
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      if (correctAnswer === answer) {
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  }
};
