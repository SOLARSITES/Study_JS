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

asideBooks.insertBefore(divBook1, divBook0);
asideBooks.insertBefore(divBook4, divBook2);
asideBooks.insertBefore(divBook3, divBook2);
asideBooks.insertBefore(divBook5, divBook2);

document.querySelector('body').style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

// divBook4.document.querySelector('h2').innerText = 'Книга 3. this и Прототипы Объектов';

divBook4.childNodes[1].childNodes[1].innerText = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

console.log(asideBooksAll);
console.log(divBookAll);
