'use strict';

let isNumber;
let money;
// let expenses = [];
let expensesAmount;
let accumulatedMonth;
let budgetDay;
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
    let sum = 0;
    let count;

    appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      appData.expenses = prompt('Введите обязательную статью расходов?');
      do {
        count = prompt('Во сколько это обойдется?');
      } while (!isNumber(count));
      sum = Number(sum) + Number(count);
    }
    return sum;
  },
  getExpensesMonth: function () {
    // let sum = 0;
    // let count;
    // for (let i = 0; i < 2; i++) {
    //   expenses[i] = prompt('Введите обязательную статью расходов?');
    //   do {
    //     count = prompt('Во сколько это обойдется?');
    //   } while (!isNumber(count));
    //   sum = Number(sum) + Number(count);
    // }
    // return sum;
  },
  getAccumulatedMonth: function () {
    return money - expensesAmount;
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / accumulatedMonth);
  },
  getStatusIncome: function () {
    if (budgetDay >= 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (budgetDay >= 600 && budgetDay <= 1200) {
      return 'У Вас средний уровень дохода';
    } else if (budgetDay >= 0 && budgetDay <= 600) {
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
expensesAmount = appData.getExpensesMonth();
accumulatedMonth = appData.getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);

appData.getTargetMonth() >= 0
  ? console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев(-а)')
  : console.log('Цель не будет достигнута');

console.log(expensesAmount);
console.log(appData.addExpenses);
console.log('Бюджет на день: ' + budgetDay);
console.log(appData.getStatusIncome());
console.log(appData.expenses);
