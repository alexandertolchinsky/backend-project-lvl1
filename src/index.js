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

const askQuestions = (questions) => {
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i][0];
    console.log(`Question: ${question}`);
    const correctAnswer = questions[i][1];
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }
  return true;
};

const showResult = (result, name) => {
  if (result) {
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
    const result = askQuestions(questions);
    showResult(result, name);
  }
};
