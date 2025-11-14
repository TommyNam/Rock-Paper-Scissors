let userInput = document.querySelector("#user-input");
let submitBtn = document.querySelector(".submit");
let results = document.querySelector("#results");

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
  } else {
    results.textContent = "Computer Wins!";
  }
});