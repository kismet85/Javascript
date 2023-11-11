function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function mainProgram() {
  let listItem;
  const sides = Number(prompt("Enter the number of sides on the dice:"));
  let rollResult = rollDice(sides);
  const resultList = document.getElementById("code");

  while (rollResult !== sides) {
    listItem = document.createElement("li");
    listItem.textContent = rollResult;
    resultList.appendChild(listItem);
    rollResult = rollDice(sides);
  }

  listItem = document.createElement("li");
  listItem.textContent = rollResult;
  resultList.appendChild(listItem);
}

mainProgram();