'use strict';

let lang = 'ru';
let langOutput1;
let langOutput2;
let langOutput3 = [['Пн, Вт, Ср, Чт, Пт, Сб, Вс'], ['Mon, Tue, Wed, Thu, Fri, Sat, Sun']];

if (lang === 'ru') {
  langOutput1 = 'Пн, Вт, Ср, Чт, Пт, Сб, Вс';
} else {
  langOutput1 = 'Mon, Tue, Wed, Thu, Fri, Sat, Sun';
}
switch (lang) {
  case 'ru':
    langOutput2 = 'Пн, Вт, Ср, Чт, Пт, Сб, Вс';
    break;
  default:
    langOutput2 = 'Mon, Tue, Wed, Thu, Fri, Sat, Sun';
}

console.log(langOutput1);
console.log(langOutput2);
console.log(langOutput3[0].toString());
