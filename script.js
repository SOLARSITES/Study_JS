'use strict';

let isNumber;
let money;
// let expenses = [];
// let expensesAmount;
// let accumulatedMonth;
// let budgetDay;
let appData = {
  budget: money, // Доход за месяц
  budgetDay: 0, // budget / 30
  budgetMonth: 0,
  income: {}, // Дополнительные доходы
  addIncome: [],
  expenses: {}, // Обазятельные статьи расходов
  addExpenses: [], // Дополнительные расходы
  expensesMonth: 0,
  deposit: false,
  mission: 200000,
  period: 6,
  asking: function () {
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую',
      'Транспорт, коммуналка, интернет',
    );
    // let sum = 0;
    // let count;

    appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      const question = prompt('Введите обязательную статью расходов?');
      const sum = +prompt('Во сколько это обойдется?');
      appData.expenses[question] = sum;

      // appData.expenses = prompt('Введите обязательную статью расходов?');
      // do {
      //   count = prompt('Во сколько это обойдется?');
      // } while (!isNumber(count));
      // sum = Number(sum) + Number(count);
    }
    // return sum;
  },
  getExpensesMonth: function () {
    for (let item in appData.expenses) {
      appData.expensesMonth += appData.expenses[item];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    // return money - expensesAmount;
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
      return 'У Вас средний уровень дохода';
    } else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
      return 'К сожалению, у Вас уровень дохода ниже среднего';
    } else {
      return 'Что-то пошло не так';
    }
  },
};

isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    appData.budget = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

appData.asking();
start();
appData.getExpensesMonth();
appData.getBudget();
// budgetDay = Math.floor(accumulatedMonth / 30);

appData.getTargetMonth() >= 0
  ? console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев(-а)')
  : console.log('Цель не будет достигнута');

console.log(appData.expensesMonth);
console.log(appData.addExpenses);
console.log('Бюджет на день: ' + appData.budgetDay);
console.log(appData.getStatusIncome());
// console.log(appData.expenses);
