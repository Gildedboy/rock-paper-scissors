//function that returns a computer choice between rock, paper and scissors
function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

//creation of consts variables for each button already created in the DOM, they will select each button by their id
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//each playerChoice const have his own addEventListener that triggers the playRound function, this playRound uses computerChoice and a hardcode word for each player Selection based on the button
rock.addEventListener("click", function () {
  return playRound(computerChoice(), "rock");
});

paper.addEventListener("click", function () {
  return playRound(computerChoice(), "paper");
});

scissors.addEventListener("click", function () {
  return playRound(computerChoice(), "scissors");
});

//creation of consts variables for each div already created in the DOM
const content = document.querySelector(".content");
const buttons = document.querySelector(".buttons");
const scores = document.querySelector(".scores");

//creation of divs using javascript and assigned to their own const variable
const fight = document.createElement("div");
fight.classList.add(".fight");
const result = document.createElement("div");
result.classList.add(".result");

//appending fight and result divs into the content div using the scores referenceNode
content.insertBefore(fight, scores);
content.insertBefore(result, scores);

//creation of const variables for player and computer scores and assignment that will be used in the playRound
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
let playerNumber = (playerScore.textContent = 0);
let computerNumber = (computerScore.textContent = 0);

//creation of const winner div and reset button that will appear when player number reaches 5
const winner = document.createElement("div");
winner.classList.add(".winner");
const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "RESET GAME";

//RESET BUTTON LISTENER
resetButton.addEventListener("click", reset);

//reset function logic
function reset() {
  rock.classList.remove("noClick");
  paper.classList.remove("noClick");
  scissors.classList.remove("noClick");
  playerNumber = playerScore.textContent = 0;
  computerNumber = computerScore.textContent = 0;
  fight.textContent = "";
  result.textContent = "";
  content.removeChild(winner);
  content.removeChild(resetButton);
}

//function that have all the game logic and also check if the player or the computer gets to 5, displays the winner and the reset button
function playRound(computerSelection, playerSelection) {
  fight.textContent = `The player chooses ${playerSelection.toUpperCase()} and the computer chooses ${computerSelection.toUpperCase()}`;

  let roundWinner;

  if (computerSelection === "rock" && playerSelection === "paper") {
    roundWinner = "player";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    roundWinner = "computer";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    roundWinner = "computer";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    roundWinner = "player";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    roundWinner = "player";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    roundWinner = "computer";
  } else {
    roundWinner = "nobody";
  }

  switch (roundWinner) {
    case "computer":
      computerScore.textContent = ++computerNumber;
      result.textContent = `THE COMPUTER WINS THIS ROUND; ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} !!!`;
      break;
    case "player":
      playerScore.textContent = ++playerNumber;
      result.textContent = ` THE PLAYER WINS THIS ROUND; ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} !!!`;
      break;
    case "nobody":
      result.textContent = "IT'S A TIE";
      break;
  }

  //GAME WINNER LOGIC
  if (playerNumber === 5) {
    rock.classList.add("noClick");
    paper.classList.add("noClick");
    scissors.classList.add("noClick");
    content.appendChild(winner);
    content.appendChild(resetButton);
    return (winner.textContent = "PLAYER WINS THE GAME!!!");
  } else if (computerNumber === 5) {
    rock.classList.add("noClick");
    paper.classList.add("noClick");
    scissors.classList.add("noClick");
    content.appendChild(winner);
    content.appendChild(resetButton);
    return (winner.textContent = "COMPUTER WINS THE GAME!!!");
  } else {
    return;
  }
}
