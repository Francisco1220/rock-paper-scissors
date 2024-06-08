

const options = ["rock", "paper", "scissors"]

// Get's random choice from computer
function getComputerChoice () {
  const compChoice = options[Math.floor(Math.random() * options.length)];
  return compChoice;
}

// Get's user input. RETURN keyword ensures I can use value outside the function (function scope)
function getUserChoice () {
    const userChoice = prompt("Rock, Paper, or Scissors?", "rock");
    return userChoice.toLowerCase();
}

// Initialised variables that will store points
let computerScore = 0;
let userScore = 0;

// Play's one round of rps. It checks the winner, increments userScore or computerScore accordingly, and logs a message declaring the winner
function playRound (userInput, computerChoice) {
    if (userInput === "rock" & computerChoice === "scissors") {
        console.log("You Win this Round! Rock beats Scissors.");
        userScore++;
    } else if (userInput === "rock" && computerChoice === "paper") {
        console.log("You Lose this Round! Paper beats rock.");
        computerScore++;
    } else if (userInput === "paper" && computerChoice === "rock") {
        console.log("You Win this Round! Paper beats Rock.");
        userScore++;
    } else if (userInput === "paper" && computerChoice === "scissors") {
        console.log ("You Lose this Round! Scissors beats Paper.");
        computerScore++;
    } else if (userInput === "scissors" && computerChoice === "paper") {
        console.log("You Win this Round! Scissors beats Paper.");
        userScore++;
    } else if (userInput === "scissors" && computerChoice === "rock") {
        console.log("You Lose this Round! Rock beats Scissors.");
        computerScore++;
    } else if (userInput === "rock" && computerChoice === "rock" || userInput === "paper" && computerChoice === "paper" || userInput === "scissors" && computerChoice === "scissors") {
        console.log("Tie!");
    } else {
        console.log("I think you made a mistake there...");
    }
}

// let computerSelection = getComputerChoice();
// let userSelection = getUserChoice();

// playRound(userSelection, computerSelection);

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const displayResult = document.querySelector("div");

btn1.addEventListener("click", () => {
    playRound(userInput = "rock", getComputerChoice());
    displayResult.textContent = `User Score: ${userScore} Computer Score: ${computerScore}`
});

btn2.addEventListener("click", () => {
    playRound(userInput = "paper", getComputerChoice());
    displayResult.textContent = `User Score: ${userScore} Computer Score: ${computerScore}`;
});

btn3.addEventListener("click", () => {
    playRound(userInput = "scissors", getComputerChoice())
    displayResult.textContent = `User Score: ${userScore} Computer Score: ${computerScore}`;
});

// Play's 5 rounds of rps. Calls playRound to play 5 rounds, keeps track of score, and declares winner upon conclusion
/* function playGame () {
    for (let round = 0; round < 5; round++) {
        let userSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        playRound(userSelection, computerSelection);
        console.log(userScore, computerScore);
    }
    if (userScore > computerScore) {
        console.log(`Winner Winner Chicken Dinner! User Score: ${userScore} Computer Score: ${computerScore}`)
    } else if (computerScore > userScore) {
        console.log(`You Lost... User Score: ${userScore} Computer Score: ${computerScore}`);
    } else {
        console.log(`Tie! User Score: ${userScore} Computer Score: ${computerScore}`);
    }
}

playGame(); */