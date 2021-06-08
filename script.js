'use strict';

const asideBooks = document.querySelector('.books');
const divBook0 = document.querySelectorAll('.book')[0];
const divBook1 = document.querySelectorAll('.book')[1];
const divBook2 = document.querySelectorAll('.book')[2];
const divBook3 = document.querySelectorAll('.book')[3];
const divBook4 = document.querySelectorAll('.book')[4];
const divBook5 = document.querySelectorAll('.book')[5];

asideBooks.insertBefore(divBook1, divBook0);
asideBooks.insertBefore(divBook4, divBook2);
// asideBooks.insertBefore(divBook4, divBook3);

document.querySelector('.adv').remove();

console.log(asideBooks);
console.log(divBook1);
