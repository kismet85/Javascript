"use strict";
const numerot = [];

let paalla = true;
while (paalla)
{
    let numero = parseInt(prompt("Syötä luku:"))
    if(!numerot.includes(numero)){
        numerot.push(numero);
    }
    else
    {
        console.log("Number already exists");
        paalla = false;
    }
}
numerot.sort((a, b) => a - b)
for (let i =  0; i < numerot.length; i++) {
    console.log(numerot[i])
}

