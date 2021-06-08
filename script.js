'use strict';

const asideBooks = document.querySelector('.books');
const divBook0 = document.querySelectorAll('.book')[0];
const divBook1 = document.querySelectorAll('.book')[1];
const divBook2 = document.querySelectorAll('.book')[2];
const divBook3 = document.querySelectorAll('.book')[3];
const divBook4 = document.querySelectorAll('.book')[4];
const divBook5 = document.querySelectorAll('.book')[5];

const ulBook0 = divBook0.querySelector('ul');
const liBook00 = divBook0.querySelectorAll('li')[0];
const liBook01 = divBook0.querySelectorAll('li')[1];
const liBook02 = divBook0.querySelectorAll('li')[2];
const liBook03 = divBook0.querySelectorAll('li')[3];
const liBook04 = divBook0.querySelectorAll('li')[4];
const liBook05 = divBook0.querySelectorAll('li')[5];
const liBook06 = divBook0.querySelectorAll('li')[6];
const liBook07 = divBook0.querySelectorAll('li')[7];
const liBook08 = divBook0.querySelectorAll('li')[8];
const liBook09 = divBook0.querySelectorAll('li')[9];
const liBook010 = divBook0.querySelectorAll('li')[10];

const liBook50 = divBook5.querySelectorAll('li')[0];
const liBook51 = divBook5.querySelectorAll('li')[1];
const liBook52 = divBook5.querySelectorAll('li')[2];
const liBook53 = divBook5.querySelectorAll('li')[3];
const liBook54 = divBook5.querySelectorAll('li')[4];
const liBook55 = divBook5.querySelectorAll('li')[5];
const liBook56 = divBook5.querySelectorAll('li')[6];
const liBook57 = divBook5.querySelectorAll('li')[7];
const liBook58 = divBook5.querySelectorAll('li')[8];
const liBook59 = divBook5.querySelectorAll('li')[9];
const liBook510 = divBook5.querySelectorAll('li')[10];

const liBook20 = divBook2.querySelectorAll('li')[0];
const liBook21 = divBook2.querySelectorAll('li')[1];
const liBook22 = divBook2.querySelectorAll('li')[2];
const liBook23 = divBook2.querySelectorAll('li')[3];
const liBook24 = divBook2.querySelectorAll('li')[4];
const liBook25 = divBook2.querySelectorAll('li')[5];
const liBook26 = divBook2.querySelectorAll('li')[6];
const liBook27 = divBook2.querySelectorAll('li')[7];
const liBook28 = divBook2.querySelectorAll('li')[8];
const liBook29 = divBook2.querySelectorAll('li')[9];
let liBook210;
const insertChapter = document.createElement('li');

asideBooks.prepend(divBook1);
asideBooks.append(divBook2);
divBook3.before(divBook4);

document.querySelector('body').style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
divBook4.querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов';
document.querySelector('.adv').remove();

ulBook0.append(liBook02);
ulBook0.append(liBook07);
ulBook0.append(liBook010);
ulBook0.append(liBook010);
liBook09.before(liBook07);
liBook04.before(liBook06);
liBook06.after(liBook08);

liBook53.before(liBook59);
liBook58.before(liBook55);
liBook56.before(liBook52);

insertChapter.innerText = 'Глава 8: За пределами ES6';
divBook2.querySelector('ul').append(insertChapter);
liBook210 = divBook2.querySelectorAll('li')[10];
liBook28.after(liBook210);

// console.log(divBook0);
// console.log(divBook1);
// console.log(divBook2);
// console.log(divBook3);
// console.log(divBook4);
// console.log(divBook5);

// console.log(liBook00);
// console.log(liBook01);
// console.log(liBook02);
// console.log(liBook03);
// console.log(liBook04);
// console.log(liBook05);
// console.log(liBook06);
// console.log(liBook07);
// console.log(liBook08);
// console.log(liBook09);
// console.log(liBook010);

// console.log(liBook50);
// console.log(liBook51);
// console.log(liBook52);
// console.log(liBook53);
// console.log(liBook54);
// console.log(liBook55);
// console.log(liBook56);
// console.log(liBook57);
// console.log(liBook58);
// console.log(liBook59);
// console.log(liBook510);

// console.log(liBook20);
// console.log(liBook21);
// console.log(liBook22);
// console.log(liBook23);
// console.log(liBook24);
// console.log(liBook25);
// console.log(liBook26);
// console.log(liBook27);
// console.log(liBook28);
// console.log(liBook29);
// console.log(liBook210);
