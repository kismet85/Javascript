'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target");
const newUl = document.createElement("ul")
for (let i = 0; i < names.length; i++) {
    const newListObject = document.createElement("li");
    newListObject.textContent = names[i];
    newUl.appendChild(newListObject)
    targetElement.appendChild(newUl);
}