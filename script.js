let pc = 0;
let human = 0;

let pc_temp = "";
let human_temp = "";

function decide() {
  if (pc_temp === human_temp) {
    document.getElementById("result").textContent = "Tie!";
    return;
  }

  const humanWins =
    (human_temp === "rock"     && pc_temp === "scissors") ||
    (human_temp === "paper"    && pc_temp === "rock")     ||
    (human_temp === "scissors" && pc_temp === "paper");

  if (humanWins) {
    human++;
    document.getElementById("result").textContent = "You win!";
  } else {
    pc++;
    document.getElementById("result").textContent = "Computer wins!";
  }

  document.getElementById("score").textContent = `Human: ${human} | PC: ${pc}`;
}

function getComputerChoice() {
  const n = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];
  const result = choices[n];
  pc_temp = result.toLowerCase();
  document.getElementById("computer-result").textContent = "Computer: " + result;
}

function getHumanChoice() {
  const n = prompt("Play! (rock, paper or scissors)");

  if (!n) return;

  const normalised = n.toLowerCase();

  if (!["rock", "paper", "scissors"].includes(normalised)) {
    alert("Invalid choice — pick rock, paper or scissors");
    return;
  }

  human_temp = normalised;
  document.getElementById("human-result").textContent = "Human: " + n;

  getComputerChoice();
  decide();
}

document.getElementById("play").addEventListener("click", getHumanChoice);
