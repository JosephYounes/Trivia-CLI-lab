import readlineSync from 'readline-sync';
import { execSync } from 'child_process';

const questions = [
  { q: 'Approximately how old is the Universe?', answer: '13.8 billion years' },
  { q: 'Which planet is known as the Red Planet?', answer: 'Mars' },
  { q: 'What was the first artificial satellite launched?', answer: 'Sputnik 1' },
  { q: 'Who was the first human in space?', answer: 'Yuri Gagarin' },
  { q: 'Which is the largest planet in our solar system?', answer: 'Jupiter' },
  { q: 'What is the name of the first spacecraft to land on a comet?', answer: 'Philae' },
  { q: 'What is Jupiter’s Great Red Spot?', answer: 'A massive storm' },
  { q: 'Which telescope launched in 1990 is still in use?', answer: 'Hubble Space Telescope' },
];

let score = 0;
const totalTime = 60; // 60 seconds for full quiz

function startTimer() {
  let timeLeft = totalTime;
  const id = setInterval(() => {
    timeLeft--;
    if (!timeLeft) {
      console.log('\n⏰ Time’s up!');
      clearInterval(id);
      endGame();
      process.exit();
    }
  }, 1000);
}

function askQuestion({ q, answer }) {
  console.log('\n' + q);
  const user = readlineSync.question('> ');
  if (user.trim().toLowerCase() === answer.toLowerCase()) {
    console.log('✅ Correct!');
    score++;
  } else {
    console.log(`❌ Wrong! Answer: ${answer}`);
  }
  console.log(`Score: ${score}/${questions.length}`);
}

function startGame() {
  console.log('🚀 Welcome to Space Trivia CLI!');
  execSync('chmod +x src/index.js');
  startTimer();
  questions.forEach(q => askQuestion(q));
  endGame();
}

function endGame() {
  console.log(`\n🎉 Final Score: ${score} out of ${questions.length}`);
}

startGame();

// Note: To install the required package, run the following command in your terminal:
// npm install readline-sync

// To run the game, use the following command:
// node src/index.js

// To lint the code, use the following command:
// npm run lint

// "scripts": {
//   "lint": "node --check src/index.js"
// }

// C:\Users\Josep\Trivia-CLI-lab\space-trivia-cli\src\index.js

