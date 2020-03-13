import readlineSync from 'readline-sync';

export const roundCount = 3;

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getCorrectAnswer = (questions) => {
  const result = [];
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i][0];
    console.log(`Question: ${question}`);
    const correctAnswer = questions[i][1];
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      result.push(correctAnswer);
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  return result;
};

const showResult = (correctAnswerCount, name) => {
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const getRandomNumber = (min = 0, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const runGame = (questions = []) => {
  greet();
  const name = askName();
  if (questions.toString() !== '') {
    const correctAnswer = getCorrectAnswer(questions);
    const correctAnswerCount = correctAnswer.length;
    showResult(correctAnswerCount, name);
  }
};
