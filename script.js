'use strict';

const stringOptimize = function (outputString) {
  if (typeof outputString !== 'string') {
    return 'Данное значение не является строкой!';
  } else {
    return outputString.trim().slice(0, 30) + '...';
  }
};

console.log(stringOptimize(8));
console.log(
  stringOptimize('   Взошло солнце и открыло вокруг необыкновенную чистоту и свежесть.   '),
);
