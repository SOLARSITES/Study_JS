'use strict';

const stringOptimize = function (data) {
  if (typeof data !== 'string') {
    return 'Данное значение не является строкой!';
  } else {
    let rawString = data.trim();
    let outputString = rawString.slice(0, 30);
    if (outputString.length < rawString.length) {
      return (outputString += '...');
    } else {
      return outputString;
    }
  }
};

console.log(stringOptimize(8));
console.log(
  stringOptimize('   Взошло солнце и открыло вокруг необыкновенную чистоту и свежесть.   '),
);
console.log(stringOptimize('   Взошло солнце   '));
