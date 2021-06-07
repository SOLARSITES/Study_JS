'use strict';

let docElement = document.createElement('div');
docElement.classList.add('text-time');
document.body.appendChild(docElement);

docElement = document.createElement('div');
docElement.classList.add('time');
document.body.appendChild(docElement);

const timeOutput = function () {
  const weekDay = [
    'Воскресенье, ',
    'Понедельник, ',
    'Вторник, ',
    'Среда, ',
    'Четверг, ',
    'Пятница, ',
    'Суббота, ',
  ];
  const yearMonth = [
    ' января ',
    ' февраля ',
    ' марта ',
    ' апреля ',
    ' мая ',
    ' июня ',
    ' июля ',
    ' августа ',
    ' сентября ',
    ' октября ',
    ' ноября ',
    ' декабря ',
  ];
  const getDate = new Date();

  const changeEnding = function (timeNumbers, timeElements = '') {
    const timeCases =
      timeElements === 'h'
        ? [' час ', ' часа ', ' часов ']
        : timeElements === 'm'
        ? [' минута ', ' минуты ', ' минут ']
        : [' секунда ', ' секунды ', ' секунд '];
    const n = timeNumbers % 10;
    return timeNumbers > 4 && timeNumbers < 20
      ? timeNumbers + timeCases[2]
      : n === 1
      ? timeNumbers + timeCases[0]
      : n > 1 && n < 5
      ? timeNumbers + timeCases[1]
      : timeNumbers + timeCases[2];
  };

  const plusZero = function (docElement) {
    if (String(docElement).length === 1) {
      return '0' + docElement;
    } else {
      return String(docElement);
    }
  };

  const outputTextTime =
    'Сегодня ' +
    weekDay[getDate.getDay()] +
    getDate.getDay() +
    yearMonth[getDate.getMonth()] +
    getDate.getFullYear() +
    ' года, ' +
    changeEnding(getDate.getHours(), 'h') +
    changeEnding(getDate.getMinutes(), 'm') +
    changeEnding(getDate.getSeconds());
  const outputTime =
    plusZero(getDate.getDay()) +
    '.' +
    plusZero(getDate.getMonth() + 1) +
    '.' +
    getDate.getFullYear() +
    ' - ' +
    plusZero(getDate.getHours()) +
    ':' +
    plusZero(getDate.getMinutes()) +
    ':' +
    plusZero(getDate.getSeconds());

  document.querySelector('.text-time').textContent = outputTextTime;
  document.querySelector('.time').textContent = outputTime;

  console.clear();
  console.log(outputTextTime);
  console.log(outputTime);
};

setInterval(timeOutput, 1000);
