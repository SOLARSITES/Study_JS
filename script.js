'use strict';

let money = +prompt('Ваш месячный доход?', '40000');
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
  'Транспорт, коммуналка, интернет',
);
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
let amount1 = +prompt('Во сколько это обойдется?', '3000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Аренда');
let amount2 = +prompt('Во сколько это обойдется?', '1000');
let mission = 200000;
let accumulatedMonth;
let budgetDay;
let period = 6;
let income = 'Фриланс';
let showAddExpenses = addExpenses.toLocaleLowerCase().split(', ');

const getExpensesMonth = function () {
  return amount1 + amount2;
};
const getAccumulatedMonth = function () {
  return money - amount1 - amount2;
};
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);
const getTargetMonth = function () {
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

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(getExpensesMonth());
console.log(showAddExpenses);
console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев(-а)');
console.log('Бюджет на день: ' + budgetDay);
console.log(getStatusIncome());
