
const dataArray = [];

function diceThrow() {
  const roll = Math.floor(Math.random() * 6) + 1;
  dataArray.push(roll);
  return roll;
}

function changeDice() {
  const dice = document.getElementById("dice");
  dice.textContent = diceThrow().toString();
}

const btn = document.getElementById("btn");
btn.addEventListener("click", changeDice);

console.log(diceThrow(4));
