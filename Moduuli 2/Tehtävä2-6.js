"use strict";
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function mainProgram() {
    let listItem;
    let rollResult = rollDice();
    const resultList = document.getElementById("code");

    while (rollResult !== 6) {
    listItem = document.createElement("li");
    listItem.textContent = rollResult;
    resultList.appendChild(listItem);
    rollResult = rollDice();
  }

    listItem = document.createElement("li");
    listItem.textContent = rollResult;
    resultList.appendChild(listItem);
}

mainProgram();
