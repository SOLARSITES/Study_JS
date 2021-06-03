'use strict';

let arr = ['46104', '15546', '2291219', '7033', '402847', '613705', '21237460'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

let getPrimes = function (prime) {
  let arrPrimes = [];
  if (prime !== 1) {
    arrPrimes.push(1);
    for (let j = 2; j * j <= prime; j++) {
      if (prime % j === 0) {
        arrPrimes.push(j);
      }
    }
  }
  arrPrimes.push(prime);
  return arrPrimes;
};

for (let i = 2; i <= 100; i++) {
  let n = getPrimes(i);
  if (n.length <= 2) {
    console.log(`${i}: Простое число. Делители этого числа: ${n.join(' и ')}`);
  }
}
