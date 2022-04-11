const dice = document.getElementById("dice");
const diceHistory = document.getElementById("diceHistory");
const btnRoll = document.getElementById("btn-roll");
const btnClear = document.getElementById("btn-clear");
let dataArray = [];

function diceThrow() {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  dataArray.push(diceNumber);
  return diceNumber;
}

function renderDice() {
  dice.textContent = diceThrow();
  diceHistory.textContent += dataArray.pop() + ", ";
}

function clearHistory() {
  dataArray = [];
  diceHistory.textContent = "";
}

btnRoll.addEventListener("click", renderDice);
btnClear.addEventListener("click", clearHistory);
