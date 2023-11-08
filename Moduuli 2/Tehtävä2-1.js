"use strict";
const num1 = parseInt(prompt("Syötä ensimmäinen luku:"));
const num2 = parseInt(prompt("Syötä toinen luku:"));
const num3 = parseInt(prompt("Syötä kolmannes luku:"));
const num4 = parseInt(prompt("Syötä neljännes luku:"));
const num5 = parseInt(prompt("Syötä viidennes luku:"));

const nimet = [];
nimet.push(num1, num2, num3, num4, num5);

let ul = document.createElement("ul");
let p = document.createElement("p");
p.textContent = "Luvut reverse järjestyksessä:"
for (let i = nimet.length - 1; i >= 0; i--) {

    let li = document.createElement("li");
    li.textContent = nimet[i];
    ul.appendChild(li);

}
document.body.appendChild(p);
document.body.appendChild(ul);





