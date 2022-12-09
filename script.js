function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors", "");
  playerChoice = playerChoice.toLowerCase();
  while (true) {
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      playerChoice = prompt(
        "Please choose and type only Rock, Paper or Scissors"
      );
      playerChoice = playerChoice.toLowerCase();
    } else {
      return playerChoice;
    }
  }
}

function playRound(computerSelection, playerSelection) {
  console.log(
    `The computer chooses ${computerSelection} and the player chooses ${playerSelection}`
  );
  let winner;
  if (computerSelection === "rock" && playerSelection === "rock") {
    winner = "nobody";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    winner = "player";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    winner = "computer";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    winner = "computer";
  } else if (computerSelection === "paper" && playerSelection === "paper") {
    winner = "nobody";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    winner = "player";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    winner = "player";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    winner = "computer";
  } else {
    winner = "nobody";
  }
  switch (winner) {
    case "computer":
      return "The Computer WINS this Round!!!";
    case "player":
      return "The Player WINS this Round!!!";
    case "nobody":
      return "It's a tie";
  }
}

let computerCounter = 0;
let playerCounter = 0;
let roundResult;

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Game #${i}`);
    roundResult = playRound(computerChoice(), playerChoice());
    if (roundResult === "The Computer WINS this Round!!!") {
      ++computerCounter;
      console.log(roundResult);
      console.log(`Computer: ${computerCounter} vs. Player: ${playerCounter}`);
      if (computerCounter === 3) {
        return "Computer WINS THE GAME";
      } else {
      }
    } else if (roundResult === "The Player WINS this Round!!!") {
      ++playerCounter;
      console.log(roundResult);
      console.log(`Computer: ${computerCounter} vs. Player: ${playerCounter}`);
      if (playerCounter === 3) {
        return "Player WINS THE GAME";
      } else {
      }
    } else if (roundResult === "It's a tie") {
      console.log(roundResult);
      console.log(`Computer: ${computerCounter} vs. Player: ${playerCounter}`);
    } else {
    }
  }
  if (computerCounter > playerCounter) {
    return "Computer WINS THE GAME";
  } else if (playerCounter > computerCounter) {
    return "Player WINS THE GAME";
  } else {
    return "At the end of the 5 games, no one was ahead in victories, so it was a TIE GAME";
  }
}
console.log(game());
