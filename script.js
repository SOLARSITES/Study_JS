'use strict';

const getRandomColor = function () {
  let rawColorString = '0123456789abcdef',
    getColor = '#';
  for (let i = 0; i < 6; i++) {
    getColor += rawColorString[Math.floor(Math.random() * 16)];
  }
  return getColor;
};

const setBodyColor = function () {
  const newBodyColor = getRandomColor();
  document.body.style.backgroundColor = newBodyColor;
  document.querySelector('h1').textContent = newBodyColor;
};

document.querySelector('.button').addEventListener('click', setBodyColor);
