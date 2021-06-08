'use strict';

const divBookAll = document.querySelectorAll('.book');

const asideBooks = document.querySelector('.books');
const asideBooksAll = document.querySelectorAll('.books');
const divBook0 = document.querySelectorAll('.book')[0];
const divBook1 = document.querySelectorAll('.book')[1];
const divBook2 = document.querySelectorAll('.book')[2];
const divBook3 = document.querySelectorAll('.book')[3];
const divBook4 = document.querySelectorAll('.book')[4];
const divBook5 = document.querySelectorAll('.book')[5];
const liBook0 = divBook0.querySelectorAll('li');

asideBooks.insertBefore(divBook1, divBook0);
asideBooks.insertBefore(divBook4, divBook2);
asideBooks.insertBefore(divBook3, divBook2);
asideBooks.insertBefore(divBook5, divBook2);

document.querySelector('body').style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

divBook4.querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

divBook0.querySelectorAll('ul > li').forEach((n) => n.parentNode.prepend(n));

console.log(liBook0);
console.log(asideBooksAll);
console.log(divBookAll);
