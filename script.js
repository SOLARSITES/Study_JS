'use strict';

const asideBooks = document.querySelectorAll('.books')[0];
const divBook0 = document.querySelectorAll('.book')[0];
const divBook1 = document.querySelectorAll('.book')[1];
const divBook2 = document.querySelectorAll('.book')[2];
const divBook3 = document.querySelectorAll('.book')[3];
const divBook4 = document.querySelectorAll('.book')[4];
const divBook5 = document.querySelectorAll('.book')[5];

divBook0.insertBefore(divBook1);

document.querySelector('.adv').remove();

console.log(asideBooks);
console.log(divBook1);
