'use strict';

let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDay = new Date().getDay() - 1;

for (let i = 0; i < weekDays.length; i++) {
  if (i === currentDay) {
    if (weekDays[i] === 'Суббота' || weekDays[i] === 'Воскресенье') {
      document.body.insertAdjacentHTML(
        'beforeend',
        `<p style="font: bold italic 14px sans-serif;">${weekDays[i]}</p>`,
      );
    }
  } else if (weekDays[i] === 'Суббота' || weekDays[i] === 'Воскресенье') {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<p style="font: italic 14px sans-serif;">${weekDays[i]}</p>`,
    );
  } else {
    document.body.insertAdjacentHTML('beforeend', `<p>${weekDays[i]}</p>`);
  }
}
