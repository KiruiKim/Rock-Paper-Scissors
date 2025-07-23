let score = { human: 0, computer: 0, tie: 0 };

const choices = {
  Rock: "✊",
  Paper: "✋",
  Scissors: "✌️"
};

function getComputerChoice() {
  const keys = Object.keys(choices);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const playAgainBtn = document.getElementById("playAgain");

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorBtn.addEventListener("click", () => playRound("Scissors"));
playAgainBtn.addEventListener("click", resetGame);

function playRound(humanSelection) {
  const computerSelection = getComputerChoice();

  document.getElementById("humanChoiceBox").textContent = `You: ${choices[humanSelection]}`;
  document.getElementById("computerChoiceBox").textContent = `Computer: ${choices[computerSelection]}`;

  let resultMessage = "";

  if (humanSelection === computerSelection) {
    score.tie++;
    resultMessage = "🤝 It's a tie!";
  } else if (
    (humanSelection === "Rock" && computerSelection === "Scissors") ||
    (humanSelection === "Scissors" && computerSelection === "Paper") ||
    (humanSelection === "Paper" && computerSelection === "Rock")
  ) {
    score.human++;
    resultMessage = "✅ You win this round!";
  } else {
    score.computer++;
    resultMessage = "❌ Computer wins this round!";
  }

  document.getElementById("humanScore").textContent = `You: ${score.human}`;
  document.getElementById("computerScore").textContent = `Computer: ${score.computer}`;
  document.getElementById("tieScore").textContent = `Ties: ${score.tie}`;
  document.getElementById("resultBox").textContent = resultMessage;
  const playAgainBtn = document.getElementById("playAgain");

  if (score.human === 5 || score.computer === 5) {
    let finalMsg = "";
    if (score.human > score.computer) {
      finalMsg = "You win the game!";
       document.getElementById("humanChoiceBox").textContent = ``;
  document.getElementById("computerChoiceBox").textContent = ``;

    } else {
      finalMsg = "You lost the game.";
    }
 document.getElementById("humanChoiceBox").textContent = ``;
  document.getElementById("computerChoiceBox").textContent = ``;

    document.getElementById("resultBox").textContent = finalMsg;

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;

    playAgainBtn.style.display = "inline-block";
  }
}

function resetGame() {
  score = { human: 0, computer: 0, tie: 0 };

  document.getElementById("humanScore").textContent = `You: 0`;
  document.getElementById("computerScore").textContent = `Computer: 0`;
  document.getElementById("tieScore").textContent = `Ties: 0`;
  document.getElementById("resultBox").textContent = "Game reset. Let's play again!";
  document.getElementById("humanChoiceBox").textContent = `You: ❔`;
  document.getElementById("computerChoiceBox").textContent = `Computer: ❔`;

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
  playAgainBtn.style.display = "none";
}
