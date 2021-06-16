const date = new Date(),
  days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  hours = date.getHours(),
  day = days[date.getDay()],
  time = date.toLocaleTimeString('en'),
  getNewDate = new Date(new Date().getFullYear() + 1, 0, 1);

const greetings = document.createElement('div'),
  weekDay = document.createElement('div'),
  currentTime = document.createElement('div'),
  daysLeftBeforeNewYear = document.createElement('div');

const dayCase = (num) => {
  const caseVariant = [' день', ' дня', ' дней'];
  const n1 = num % 100;
  const n2 = num % 10;

  return n1 > 4 && n1 < 21
    ? num + caseVariant[2]
    : n2 === 1
    ? num + caseVariant[0]
    : n2 > 1 && n2 < 5
    ? num + caseVariant[1]
    : num + caseVariant[2];
};

greetings.textContent =
  hours < 5 || hours > 22
    ? 'Доброй ночи'
    : hours < 10
    ? 'Доброе утро'
    : hours < 17
    ? 'Добрый день'
    : 'Добрый вечер';

weekDay.textContent = 'Сегодня: ' + day;
currentTime.textContent = 'Текущее время: ' + time;
daysLeftBeforeNewYear.textContent =
  'До нового года осталось ' +
  dayCase(Math.ceil((getNewDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

document.body.append(greetings, weekDay, currentTime, daysLeftBeforeNewYear);
