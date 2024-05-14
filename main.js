

const options = ["rock", "paper", "scissors"]

// Get's random choice from computer
function getComputerChoice () {
  const compChoice = options[Math.floor(Math.random() * options.length)];
  return compChoice;
}

// Get's user input. RETURN keyword ensures I can use value outside the function (function scope)
function getUserChoice () {
    const userChoice = prompt("Rock, Paper, or Scissors?", "rock");
    return userChoice;
}

// Initialised variables that will store points
let computerScore = 0;
let userScore = 0;

console.log(computerScore);
console.log(userScore);
