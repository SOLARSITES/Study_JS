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
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  },
  showResult: function () {
    inputBudgetMonthValue.value = this.budgetMonth;
    inputBudgetDayValue.value = this.budgetDay;
    inputExpensesMonthValue.value = this.expensesMonth;
    inputAdditionalExpensesValue.value = this.addExpenses.join(', ');
    inputAdditionalIncomeValue.value = this.addIncome.join(', ');
    inputTargetMonthValue.value = Math.ceil(this.getTargetMonth());
    inputIncomePeriodValue.value = this.calcPeriod();
    inputPeriodSelect.addEventListener('input', this.showPeriodAmount);
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

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = inputAdditionalExpensesItem.value.split(',');

    addExpenses.forEach(function (item) {
      item = item.trim();

      if (item !== '') {
        this.addExpenses.push(item);
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
    for (let item in this.expenses) {
      this.expensesMonth += +this.expenses[item];
    }
  },
  getBudget: function () {
    this.budget = +inputSalaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return inputTargetAmount.value / this.budgetMonth;
  },
  getStatusIncome: function () {
    if (this.budgetDay >= 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
      return 'У Вас средний уровень дохода';
    } else if (this.budgetDay >= 0 && this.budgetDay <= 600) {
      return 'К сожалению, у Вас уровень дохода ниже среднего';
    } else {
      return 'Что-то пошло не так';
    }
  },
  getInfoDeposit: function () {
    if (this.deposit) {
      let percentDeposit;
      let moneyDeposit;

      do {
        percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(percentDeposit));

      do {
        moneyDeposit = prompt('Какая сумма заложена?', '10000');
      } while (!isNumber(moneyDeposit));

      this.percentDeposit = +percentDeposit;
      this.moneyDeposit = +moneyDeposit;
    }
  },
  calcPeriod: function () {
    return this.budgetMonth * inputPeriodSelect.value;
  },
  showPeriodAmount: function (event) {
    document.querySelector('.period-amount').textContent = event.target.value;
    inputIncomePeriodValue.value = appData.calcPeriod();
  },
  blockStart: function () {
    start.disabled = !inputSalaryAmount.value.trim();
  },
};

const allowOnlyDigits = function (event) {
  let rawDigitsValue = event.target.value;

  const getOnlyDigits = function (event) {
    if (!/^[\d]+$/.test(event.target.value)) {
      alert('Разрешается ввод только цифр!');
      event.target.value = rawDigitsValue;
      event.target.removeEventListener('input', getOnlyDigits);
    }
    rawDigitsValue = event.target.value;
  };
  event.target.addEventListener('input', getOnlyDigits);
};

const allowOnlyText = function (event) {
  let rawTextValue = event.target.value;

  const getRightText = function (event) {
    if (!/^[,. а-яА-ЯёЁ]+$/.test(event.target.value)) {
      alert('Разрешается ввод только русских букв, пробелов и знаков препинания!');
      event.target.value = rawTextValue;
      event.target.removeEventListener('input', getRightText);
    }
    rawTextValue = event.target.value;
  };
  event.target.addEventListener('input', getRightText);
};

const goNow = appData.start.bind(appData);

appData.blockStart();

start.addEventListener('click', goNow);
buttonExpensesAdd.addEventListener('click', appData.addExpensesBlock);
buttonIncomeAdd.addEventListener('click', appData.addIncomeBlock);
inputPeriodSelect.addEventListener('input', appData.showPeriodAmount);
inputSalaryAmount.addEventListener('input', appData.blockStart);

document.querySelectorAll('[placeholder="Наименование"]').forEach(function (input) {
  input.addEventListener('focus', allowOnlyText);
});
document.querySelectorAll('[placeholder="Сумма"]').forEach(function (input) {
  input.addEventListener('focus', allowOnlyDigits);
});
