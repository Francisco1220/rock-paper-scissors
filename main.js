

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
        displayRoundResult.textContent = `Round ${round} : You Win this Round! Rock beats Scissors.`;
        userScore++;
    } else if (userInput === "rock" && computerChoice === "paper") {
        displayRoundResult.textContent = `Round ${round} : You Lose this Round! Paper beats rock.`;
        computerScore++;
    } else if (userInput === "paper" && computerChoice === "rock") {
        displayRoundResult.textContent = `Round ${round} : You Win this Round! Paper beats Rock.`;
        userScore++;
    } else if (userInput === "paper" && computerChoice === "scissors") {
        displayRoundResult.textContent = `Round ${round} : You Lose this Round! Scissors beats Paper.`;
        computerScore++;
    } else if (userInput === "scissors" && computerChoice === "paper") {
        displayRoundResult.textContent = `Round ${round} : You Win this Round! Scissors beats Paper.`;
        userScore++;
    } else if (userInput === "scissors" && computerChoice === "rock") {
        displayRoundResult.textContent = `Round ${round} : You Lose this Round! Rock beats Scissors.`;
        computerScore++;
    } else if (userInput === "rock" && computerChoice === "rock" || userInput === "paper" && computerChoice === "paper" || userInput === "scissors" && computerChoice === "scissors") {
        displayRoundResult.textContent = `Round ${round} : Tie!`;
    } else {
        displayRoundResult.textContent = "I think you made a mistake there...";
    }
}

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const displayScore = document.querySelector("#div2");
displayScore.style.marginBottom="10px";
displayScore.style.fontSize="25px";
displayScore.style.color="blue";

const displayWinner = document.querySelector("#div3");
displayWinner.style.fontSize="50px";

const displayRoundResult = document.querySelector("#div1");
displayRoundResult.style.marginBottom="10px";
displayRoundResult.style.fontSize="25px";

const btn = document.querySelectorAll(".btn");
btn[0].style.marginRight="10px";
btn[1].style.marginRight="10px";
btn[2].style.marginRight="10px";
btn[0].style.marginBottom="10px";
btn[1].style.marginBottom="10px";
btn[2].style.marginBottom="10px";

for (let i = 0; i < btn.length; i++) {
    btn[i].style.padding="50px";
    btn[i].style.borderRadius="10px";
    btn[i].style.fontSize="20px";
}

function disableButtons () {
    if (checksWinner()) {
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }
}

const container = document.querySelector("body");
container.setAttribute("align", "center");

let round = 1;

btn1.addEventListener("click", () => {
    playRound(userInput = "rock", getComputerChoice());
    displayScore.textContent = `Your Score: ${userScore} Computer Score: ${computerScore}`;
    checksWinner();
    round++;
    disableButtons ()
});

btn1.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "grey";
});

btn1.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
});

btn2.addEventListener("click", () => {
    playRound(userInput = "paper", getComputerChoice());
    displayScore.textContent = `Your Score: ${userScore} Computer Score: ${computerScore}`;
    checksWinner();
    round++;
    disableButtons ()
});

btn2.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "grey";
});

btn2.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
});

btn3.addEventListener("click", () => {
    playRound(userInput = "scissors", getComputerChoice())
    displayScore.textContent = `Your Score: ${userScore} Computer Score: ${computerScore}`;
    checksWinner();
    round++;
    disableButtons ()
});

btn3.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "grey";
});

btn3.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "white";
});

function checksWinner () {
    if (userScore === 5 && computerScore === 5) {
        displayWinner.textContent = "It's a Tie!";
        return true;
    } else if (userScore === 5 && userScore > computerScore) {
        displayWinner.textContent = "Congratulations. You are the Winner!";
        return true;
    } else if (computerScore === 5 && computerScore > userScore) {
        displayWinner.textContent = " You Lost. Better luck next time!";
        return true;
    }
    return false;
}


// let computerSelection = getComputerChoice();
// let userSelection = getUserChoice();

// playRound(userSelection, computerSelection);

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