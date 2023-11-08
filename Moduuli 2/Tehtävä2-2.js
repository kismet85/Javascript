"use strict";
let nimienmaara = parseInt(prompt("Syötä nimien lukumäärä: "))
const nimet = [];
for (let i = 0; i < nimienmaara; i++) {
    let nimi = prompt("Syötä nimi:");
    nimet.push(nimi);
}

let ol = document.createElement("ol");
let p = document.createElement("p");
p.textContent = "Nimien printtaus:"
for (let i = nimet.length - 1; i >= 0; i--) {

    let li = document.createElement("li");
    li.textContent = nimet[i];
    ol.appendChild(li);

}
document.body.appendChild(p);
document.body.appendChild(ol);



