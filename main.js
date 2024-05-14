// Get's random choice from computer

const options = ["rock", "paper", "scissors"]

function getComputerChoice () {
  const compChoice = options[Math.floor(Math.random() * options.length)];
  return compChoice;
}
