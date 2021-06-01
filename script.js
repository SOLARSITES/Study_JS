'use strict';

let money = +prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 200000;
let budgetMonth = money - amount1 - amount2;
let budgetDay = budgetMonth / 30;
let levelBudgetDay;
let period = 6;
let income = 'Фриланс';
let lowerCase = addExpenses.toLocaleLowerCase();
let showArray = lowerCase.split(', ');

if (budgetDay >= 1200) {
  levelBudgetDay = 'У Вас высокий уровень дохода';
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  levelBudgetDay = 'У Вас средний уровень дохода';
} else if (budgetDay >= 0 && budgetDay <= 600) {
  levelBudgetDay = 'К сожалению, у Вас уровень дохода ниже среднего';
} else {
  levelBudgetDay = 'Что-то пошло не так';
}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses);
console.log(showArray);
console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев(-а)');
console.log('Бюджет на день: ' + Math.floor(budgetDay));
console.log(levelBudgetDay);
