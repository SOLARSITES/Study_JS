'use strict';

const buttonStart = document.getElementById('start');
const buttonIncomeAdd = document.getElementsByTagName('button')[0];
const buttonExpensesAdd = document.getElementsByTagName('button')[1];
const inputDepositCheck = document.querySelector('#deposit-check');
const inputBudgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const inputBudgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const inputExpensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const inputAdditionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let inputAdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const inputIncomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const inputTargetMonthValue = document.getElementsByClassName('target_month-value')[0];
const inputSalaryAmount = document.querySelector('.salary-amount');
let divIncomeItems = document.querySelectorAll('.income-items');
// const inputIncomeTitle = divIncomeItems.children[0];
// const inputIncomeAmount = divIncomeItems.children[1];
const inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item');
// const inputAdditionalIncomeItem0 = document.querySelectorAll('.additional_income-item')[0];
// const inputAdditionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[1];
let divExpensesItems = document.querySelectorAll('.expenses-items');
// const inputExpensesTitle = divExpensesItems.children[0];
// const inputExpensesAmount = divExpensesItems.children[1];
const inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item');
const inputTargetAmount = document.querySelector('.target-amount');
const inputPeriodSelect = document.querySelector('.period-select');

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = function (str, comma = false) {
  const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
};

let appData = {
  budget: 0, // Доход за месяц
  budgetDay: 0, // budget / 30
  budgetMonth: 0,
  income: {}, // Дополнительные доходы
  incomeMonth: 0,
  addIncome: [],
  expenses: {}, // Обазятельные статьи расходов
  addExpenses: [], // Дополнительные расходы
  expensesMonth: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function () {
    // if (inputSalaryAmount.value === '') {
    //   alert('Ошибка! Поле "Месячный доход" должно быть заполнено!');
    //   return;
    // }
    appData.budget = Number(inputSalaryAmount.value);

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function () {
    inputBudgetMonthValue.value = appData.budgetMonth;
    inputBudgetDayValue.value = appData.budgetDay;
    inputExpensesMonthValue.value = appData.expensesMonth;
    inputAdditionalExpensesValue.value = appData.addExpenses.join(', ');
    inputAdditionalIncomeValue.value = appData.addIncome.join(', ');
    inputTargetMonthValue.value = Math.ceil(appData.getTargetMonth());
    inputIncomePeriodValue.value = appData.calcPeriod();
    inputPeriodSelect.addEventListener('input', this.showPeriodAmount);
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = divExpensesItems[0].cloneNode(true);

    divExpensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonExpensesAdd);
    divExpensesItems = document.querySelectorAll('.expenses-items');

    if (divExpensesItems.length === 3) {
      buttonExpensesAdd.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = divIncomeItems[0].cloneNode(true);

    divIncomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonIncomeAdd);
    divIncomeItems = document.querySelectorAll('.income-items');

    if (divIncomeItems.length === 3) {
      buttonIncomeAdd.style.display = 'none';
    }
  },
  getExpenses: function () {
    divExpensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;

      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    divIncomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;

      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });

    // if (confirm('Есть ли у вас дополнительный источник заработка?')) {
    //   let itemIncome;
    //   let cashIncome;
    //
    //   do {
    //     itemIncome = prompt('Какой у вас дополнительный заработок?', 'Подрабатываю');
    //   } while (!isString(itemIncome));
    //
    //   do {
    //     cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
    //   } while (!isNumber(cashIncome));
    //
    //   appData.income[itemIncome] = Number(cashIncome);
    // }
    //
    // for (let key in appData.income) {
    //   appData.incomeMonth += Number(appData.income[key]);
    // }
  },
  getAddExpenses: function () {
    let addExpenses = inputAdditionalExpensesItem.value.split(',');

    addExpenses.forEach(function (item) {
      item = item.trim();

      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    inputAdditionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();

      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
  // asking: function () {
  //   let addExpenses = prompt(
  //     'Перечислите возможные расходы за рассчитываемый период через запятую',
  //     'Транспорт, коммуналка, интернет',
  //   );
  //
  //   appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
  //   appData.deposit = confirm('Есть ли у вас депозит в банке?');
  // },
  getExpensesMonth: function () {
    for (let item in appData.expenses) {
      appData.expensesMonth += Number(appData.expenses[item]);
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return inputTargetAmount.value / appData.budgetMonth;
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
  getInfoDeposit: function () {
    if (appData.deposit) {
      let percentDeposit;
      let moneyDeposit;

      do {
        percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(percentDeposit));

      do {
        moneyDeposit = prompt('Какая сумма заложена?', '10000');
      } while (!isNumber(moneyDeposit));

      appData.percentDeposit = Number(percentDeposit);
      appData.moneyDeposit = Number(moneyDeposit);
    }
  },
  calcPeriod: function () {
    return appData.budgetMonth * inputPeriodSelect.value;
  },
  showPeriodAmount: function (event) {
    document.querySelector('.period-amount').textContent = event.target.value;
    inputIncomePeriodValue.value = appData.calcPeriod();
  },
  getNoStart: function () {
    start.disabled = !inputSalaryAmount.value.trim();
  },
};

appData.getNoStart();

start.addEventListener('click', appData.start);
buttonExpensesAdd.addEventListener('click', appData.addExpensesBlock);
buttonIncomeAdd.addEventListener('click', appData.addIncomeBlock);
inputPeriodSelect.addEventListener('input', appData.showPeriodAmount);
inputSalaryAmount.addEventListener('input', appData.getNoStart);

// appData.getTargetMonth() >= 0
//   ? console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев(-а)')
//   : console.log('Цель не будет достигнута');

// console.log('Расходы за месяц: ' + appData.expensesMonth);
// console.log(appData.getStatusIncome());
// console.log('Наша программа включает в себя данные:');
// for (let item in appData) {
//   console.log(item + ': ' + appData[item]);
// }
// console.log(
//   appData.addExpenses
//     .map((itemExp, i) => itemExp[0].toUpperCase() + itemExp.substring(1))
//     .join(', '),
// );

// console.log(buttonStart);
// console.log(buttonIncomeAdd);
// console.log(buttonExpensesAdd);
// console.log(inputDepositCheck);
// console.log(inputBudgetDayValue);
// console.log(inputExpensesMonthValue);
// console.log(inputAdditionalIncomeValue);
// console.log(inputAdditionalExpensesValue);
// console.log(inputIncomePeriodValue);
// console.log(inputTargetMonthValue);
// console.log(inputSalaryAmount);
// console.log(inputIncomeTitle);
// console.log(inputIncomeAmount);
// console.log(inputAdditionalIncomeItem0);
// console.log(inputAdditionalIncomeItem1);
// console.log(inputExpensesTitle);
// console.log(inputExpensesAmount);
// console.log(inputAdditionalExpensesItem);
// console.log(inputTargetAmount);
// console.log(inputPeriodSelect);
