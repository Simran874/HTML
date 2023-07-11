const prompt = require("prompt-sync")(); 
let words = ['Snake', 'Water', 'Gun'];
let random = words[Math.floor(Math.random() * words.length)];
//console.log(random)
let input;
let user_points = 0;
let computer_points = 0;
let chances = 0;
do {
  input = prompt("Enter any one (snake, water, gun) = ");
  if (input == random) {
    console.log("Draw");
    chances++
  }
  else if (input == 'Snake' && random == 'Water' || input == 'Water' && random == 'Gun '|| input == 'Gun' && random == 'Snake') {
    console.log("You wins!");
    chances++
    user_points++
  }
  else {
    console.log("Computer wins!");
    chances++
    computer_points++
  }
} while (chances <= 5);
console.log(`Your points = ${user_points}`);
console.log(`Computer points = ${computer_points}`);
if (user_points < computer_points) {
  console.log('Sorry, but the finall winner is computer.');
  console.log('Game ended');
}
else if (user_points > computer_points) {
  console.log('Congrats!, You are the Finall winner.');
  console.log('Game ended');
}
else {
  console.log("The game is end and It's a draw.");
}