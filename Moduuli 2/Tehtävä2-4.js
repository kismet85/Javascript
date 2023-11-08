"use strict";
const numerot = [];

let numero = 1;
while (numero > 0)
{
    numero = parseInt(prompt("Syötä luku:"))
    numerot.push(numero);
}
numerot.sort((a, b) => a - b)
numerot.reverse();
for (let i =  0; i < numerot.length; i++) {
    console.log(numerot[i])
}


