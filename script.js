'use strict';
const num = 266219;
const multResult = num
  .toString()
  .split('')
  .reduce((total, amount) => total * amount);
console.log(multResult);

const degResult = multResult ** 3;
console.log(degResult.toString().substring(0, 2));

// Вариант с использованием цикала для получения произведения цифр числа
const strNum = num.toString();
let mult = 1;
for (let i = 0; i < strNum.length; i++) {
  mult *= strNum[i];
}
console.log(mult);
