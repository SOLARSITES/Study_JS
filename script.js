'use strict';

let isNumber;
let money;
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

    appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let question = prompt('Введите обязательную статью расходов?');
      let sum = prompt('Во сколько это обойдется?');
      do {
        sum = prompt('Во сколько это обойдется?');
      } while (!isNumber(sum));
      appData.expenses[question] = sum;
    }
  },
  getExpensesMonth: function () {
    for (let item in appData.expenses) {
      appData.expensesMonth += appData.expenses[item];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
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
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

appData.asking();
start();
appData.getExpensesMonth();
appData.getBudget();

appData.getTargetMonth() >= 0
  ? console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев(-а)')
  : console.log('Цель не будет достигнута');

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Уровень дохода: ', appData.getStatusIncome());
console.log('Бюджет на день: ' + appData.budgetDay);
