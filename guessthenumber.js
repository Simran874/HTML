const prompt = require("prompt-sync")();
const randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = prompt("Guess the number between 1 and 100 : ");
let turns = 0;

while (userGuess != randomNumber) {
  if (userGuess < randomNumber) {
    userGuess = prompt("Your guess was too low. Try again. ");

  } else {
    userGuess = prompt("Your guess was too high. Try again. ");
    
  }
  turns++;
}

const score = 100 - turns;
console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`);
