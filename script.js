'use strict';

const stringOptimize = function (rawString) {
  let outputString = 'Данное значение не является строкой!';
  if (typeof rawString === 'string') {
    let maxString = 30;
    let trimString = rawString.trim();
    if (trimString.length > maxString) {
      outputString = trimString.slice(0, 30) + '...';
    } else {
      outputString = trimString;
    }
  }
  return outputString;
};

console.log(stringOptimize(8));
console.log(
  stringOptimize('   Взошло солнце и открыло вокруг необыкновенную чистоту и свежесть.   '),
);
console.log(stringOptimize('   Взошло солнце   '));
