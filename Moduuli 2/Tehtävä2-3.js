"use strict";
const nimet = [];
alert("Syötä 6 koiran nimet:")
for (let i = 0; i < 6; i++) {
    let nimi = prompt("Syötä koiran nimi:");
    nimet.push(nimi);
}
nimet.sort();
nimet.reverse();
let ol = document.createElement("ul");
let p = document.createElement("p");
p.textContent = "Koirien nimien printtaus:"
for (let i =  0; i < nimet.length; i++) {

    let li = document.createElement("li");
    li.textContent = nimet[i];
    ol.appendChild(li);

}
document.body.appendChild(p);
document.body.appendChild(ol);



