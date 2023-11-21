const targetElement = document.getElementById('target');

const ulElement = document.createElement('ul');

const liElement1 = document.createElement('li');
liElement1.innerHTML = 'First item';

const liElement2 = document.createElement('li');
liElement2.innerHTML = 'Second item';
liElement2.classList.add('my-item');

const liElement3 = document.createElement('li');
liElement3.innerHTML = 'Third item';

ulElement.appendChild(liElement1);
ulElement.appendChild(liElement2);
ulElement.appendChild(liElement3);

targetElement.appendChild(ulElement);