'use strict';

let arr = ['46104', '15546', '2291219', '7033', '402847', '613705', '21237460'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}
