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

  // check if player types a valid answer
  if (!["rock", "paper", "scissors"].includes(playerChoice)) {
    winnerText.textContent = "Please enter rock, paper, or scissors!";
    return; // stop if inputs wrong
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

  // Show both images after choices are made
  showChoices(playerChoice, computer);
});

/* =========== 
RESET FUNCTION
=========== */
resetBtn.addEventListener("click", () => {
  // Resets score & message
  userScore = 0;
  computerScore = 0;
  userScoreboard.textContent = userScore;
  computerScoreboard.textContent = computerScore;
  winnerText.textContent = "Who will win?";

  // grab both images
  const userImg = document.getElementById("userChoiceImg");
  const compImg = document.getElementById("computerChoiceImg");

  // turn off animation for instant hide
  userImg.style.transition = "none";
  compImg.style.transition = "none";

  // clear image path to make them invisible
  userImg.src = "";
  compImg.src = "";
  userImg.style.opacity = "0";
  compImg.style.opacity = "0";

  // forces the browser to apply the instant hide
  void userImg.offsetWidth;
  void compImg.offsetWidth;

  // turns the fade in animation back on for the next round
  userImg.style.transition = "opacity 0.5s ease-in";
  compImg.style.transition = "opacity 0.5s ease-in";
});

// shows the image choices and fade them in
function showChoices(playerChoice, computerChoice) {
  const userImg = document.getElementById("userChoiceImg");
  const compImg = document.getElementById("computerChoiceImg");

  // sets image path
  userImg.src = "images/" + playerChoice + ".png";
  compImg.src = "images/" + computerChoice + ".png";

  // Fade back in
  userImg.style.opacity = "1";
  compImg.style.opacity = "1";
}
