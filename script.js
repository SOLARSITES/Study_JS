'use strict';

const buttonStart = document.getElementById('start');
const buttonIncomeAdd = document.getElementsByTagName('button')[0];
const buttonExpensesAdd = document.getElementsByTagName('button')[1];
const inputDepositCheck = document.querySelector('#deposit-check');
const inputBudgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const inputBudgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const inputExpensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const inputAdditionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const inputIncomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const inputTargetMonthValue = document.getElementsByClassName('target_month-value')[0];
const inputSalaryAmount = document.querySelector('.salary-amount');
const inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item');
const inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item');
const inputTargetAmount = document.querySelector('.target-amount');
const inputPeriodSelect = document.querySelector('.period-select');

let inputAdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let divIncomeItems = document.querySelectorAll('.income-items');
let divExpensesItems = document.querySelectorAll('.expenses-items');

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
    appData.budget = +inputSalaryAmount.value;

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
    inputPeriodSelect.addEventListener('input', appData.showPeriodAmount);
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = divExpensesItems[0].cloneNode(true);

    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    divExpensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonExpensesAdd);
    divExpensesItems = document.querySelectorAll('.expenses-items');

    if (divExpensesItems.length === 3) {
      buttonExpensesAdd.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = divIncomeItems[0].cloneNode(true);

    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
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

    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
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
  getExpensesMonth: function () {
    for (let item in appData.expenses) {
      appData.expensesMonth += +appData.expenses[item];
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

      appData.percentDeposit = +percentDeposit;
      appData.moneyDeposit = +moneyDeposit;
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
    start.disabled = !inputSalaryAmount.value.trim() && !isNumber();
  },
};

const allowOnlyDigits = function (event) {
  let rawDigitsValue = event.target.value;

  const getOnlyDigits = function (event) {
    if (!/^[\d]+$/.test(event.target.value)) {
      alert('Разрешается ввод только цифр!');
      event.target.value = rawDigitsValue;
      event.target.removeEventListener('change', getOnlyDigits);
    }
    rawDigitsValue = event.target.value;
  };
  event.target.addEventListener('change', getOnlyDigits);
};

const allowOnlyText = function (event) {
  let rawTextValue = event.target.value;

  const getRightText = function (event) {
    if (!/^[,. а-яА-ЯёЁ]+$/.test(event.target.value)) {
      alert('Разрешается ввод только русских букв, пробелов и знаков препинания!');
      event.target.value = rawTextValue;
      event.target.removeEventListener('change', getRightText);
    }
    rawTextValue = event.target.value;
  };
  event.target.addEventListener('change', getRightText);
};

appData.getNoStart();

start.addEventListener('click', appData.start);
buttonExpensesAdd.addEventListener('click', appData.addExpensesBlock);
buttonIncomeAdd.addEventListener('click', appData.addIncomeBlock);
inputPeriodSelect.addEventListener('input', appData.showPeriodAmount);
inputSalaryAmount.addEventListener('input', appData.getNoStart);

document.querySelectorAll('[placeholder="Наименование"]').forEach(function (input) {
  input.addEventListener('focus', allowOnlyText);
});
document.querySelectorAll('[placeholder="Сумма"]').forEach(function (input) {
  input.addEventListener('focus', allowOnlyDigits);
});
