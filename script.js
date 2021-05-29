'use strict';

let num = 266219;

let multResult = num
  .toString()
  .split('')
  .reduce((total, amount) => total * amount);
console.log(multResult);

let degResult = multResult ** 3;

console.log(String(degResult).slice(0, 2));
