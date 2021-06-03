'use strict';

let money;
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
  'Транспорт, коммуналка, интернет',
);
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses = [];
let expensesAmount;
let mission = 200000;
let accumulatedMonth;
let budgetDay;
let period = 6;
let income = 'Фриланс';
let showAddExpenses = addExpenses.toLocaleLowerCase().split(', ');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

let getExpensesMonth = function () {
  let sum = 0;
  let count;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      count = prompt('Во сколько это обойдется?');
    } while (!isNumber(count));
    sum = Number(sum) + Number(count);
  }
  return sum;
};

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let getTargetMonth = function () {
  return Math.ceil(mission / accumulatedMonth);
};

let showTypeOf = function (data) {
  console.log(typeof data);
};

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return 'У Вас высокий уровень дохода';
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    return 'У Вас средний уровень дохода';
  } else if (budgetDay >= 0 && budgetDay <= 600) {
    return 'К сожалению, у Вас уровень дохода ниже среднего';
  } else {
    return 'Что-то пошло не так';
  }
};

start();
expensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

getTargetMonth() >= 0
  ? console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев(-а)')
  : console.log('Цель не будет достигнута');

console.log(expensesAmount);
console.log(showAddExpenses);
console.log('Бюджет на день: ' + budgetDay);
console.log(getStatusIncome());
