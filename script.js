let userScore = 0;
let computerScore = 0;
let userScoreboard = document.querySelector("#user-score");
let computerScoreboard = document.querySelector("#computer-score");

let userInput = document.querySelector("#user-input");
let submitBtn = document.querySelector(".submit");
let results = document.querySelector("#results");
let resetBtn = document.querySelector("#reset");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

submitBtn.addEventListener("click", () => {
  let playerChoice = userInput.value.toLowerCase().trim();
  let computer = computerChoice(); // call function to get a random choice

  // Game logic
  if (playerChoice === computer) {
    results.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computer === "scissors") ||
    (playerChoice === "paper" && computer === "rock") ||
    (playerChoice === "scissors" && computer === "paper")
  ) {
    results.textContent = "Player Wins!";
    userScore++;
    userScoreboard.textContent = userScore;
  } else if ((results.textContent = "Computer Wins!")) {
    computerScore++;
    computerScoreboard.textContent = computerScore;
  } else {
    window.alert("Make a choice!"); // VALIDATION (DO IT)
  }
});

// Reset Scoreboard
resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreboard.textContent = userScore;
  computerScoreboard.textContent = computerScore;
  results.textContent = "Who will win?";
});
