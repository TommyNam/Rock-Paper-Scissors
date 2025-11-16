let userScore = 0;
let computerScore = 0;
let userScoreboard = document.querySelector("#user-score");
let computerScoreboard = document.querySelector("#computer-score");

let userInput = document.querySelector("#user-input");
let submitBtn = document.querySelector(".submit");
let resetBtn = document.querySelector("#reset");
let winnerText = document.querySelector("#winner-text");

// A number randomized 0-1 * 3, round to nearest integer = computers choice
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// When submit is pressed, run game
submitBtn.addEventListener("click", () => {
  let playerChoice = userInput.value.toLowerCase().trim();
  let computer = computerChoice();

  // Validation first
  if (!["rock", "paper", "scissors"].includes(playerChoice)) {
    window.alert("Make a choice!");
    return;
  }

  // Game logic
  if (playerChoice === computer) {
    winnerText.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computer === "scissors") ||
    (playerChoice === "paper" && computer === "rock") ||
    (playerChoice === "scissors" && computer === "paper")
  ) {
    winnerText.textContent = "Player Wins!";
    userScore++;
    userScoreboard.textContent = userScore;
  } else {
    winnerText.textContent = "Computer Wins!";
    computerScore++;
    computerScoreboard.textContent = computerScore;
  }

  // Show images after choices are made
  showChoices(playerChoice, computer);
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreboard.textContent = userScore;
  computerScoreboard.textContent = computerScore;
  winnerText.textContent = "Who will win?";
  document.getElementById("userChoiceImg").src = "";
  document.getElementById("computerChoiceImg").src = "";
});

function showChoices(playerChoice, computerChoice) {
  document.getElementById("userChoiceImg").src =
    "images/" + playerChoice + ".png";
  document.getElementById("computerChoiceImg").src =
    "images/" + computerChoice + ".png";
}
