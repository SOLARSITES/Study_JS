'use strict';

let lang = 'ru';
let langOutput1;
let langOutput2;
let langOutput3 = {
  ru: ['Пн, Вт, Ср, Чт, Пт, Сб, Вс'],
  en: ['Mon, Tue, Wed, Thu, Fri, Sat, Sun'],
};
let namePerson = 'Артем';
let outputNamePerson =
  namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';

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
console.log(langOutput3[lang].toString());
console.log(outputNamePerson);
