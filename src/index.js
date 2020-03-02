import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getCorrectAnswerCount = (questions) => {
  let correctAnswerCount = 0;
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i][0];
    console.log(`Question: ${question}`);
    const correctAnswer = questions[i][1];
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  return correctAnswerCount;
};

export const showResult = (correctAnswerCount, name) => {
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a > 0 && b > 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export const getProgression = () => {
  const randomNumber = getRandomNumber();
  const result = [randomNumber];
  for (let i = 1; i <= 10; i += 1) {
    result.push(randomNumber + i);
  }
  return result;
};
