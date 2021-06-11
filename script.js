'use strict';

const start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[0], // Кнопка "+" (Дополнительный доход)
  expensesPlus = btnPlus[1], // Кнопка "+" (Возможные расходы)
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'), // Возможный доход
  depositCheck = document.querySelector('#deposit-check'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
  targetMonthValue = document.getElementsByClassName('target_month-value')[0],
  salaryAmount = document.querySelector('.salary-amount'), // Месячный доход
  additionalExpenses = document.querySelector('.additional_expenses'),
  periodSelect = document.querySelector('.period-select'), // range
  additionalExpensesItem = document.querySelector('.additional_expenses-item'), // Возможные расходы
  targetAmount = document.querySelector('.target-amount'); // Цель (Сумма целевого нкопления)

let expensesItems = document.querySelectorAll('.expenses-items'), // Возможные расходы
  incomeItems = document.querySelectorAll('.income-items'); // Дополнительный доход

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
  expensesMonth: 0,
  addExpenses: [], // Дополнительные расходы
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function () {
    if (start.textContent === 'Рассчитать') {
      this.getExpenses();
      this.getIncome();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.getStatusIncome();
      this.showResult();
      this.blockage();
      start.textContent = 'Сбросить';
    } else {
      start.textContent = 'Рассчитать';
      this.reset();
    }
  },
  blockage: function (disabled = true) {
    document.querySelectorAll('.data input[type=text]').forEach((item) => {
      item.disabled = disabled;
    });
    document.querySelector('.data input[type=checkbox]').disabled = disabled;
    incomePlus.disabled = disabled;
    expensesPlus.disabled = disabled;
  },
  reset: function () {
    for (let i = incomeItems.length - 1; i > 0; i--) {
      incomeItems[0].parentNode.removeChild(incomeItems[i]);
    }

    for (let i = expensesItems.length - 1; i > 0; i--) {
      expensesItems[0].parentNode.removeChild(expensesItems[i]);
    }

    incomePlus.style.display = '';
    expensesPlus.style.display = '';

    this.blockage(false);
    document.querySelectorAll('input[type=text]').forEach((item) => {
      item.value = '';
    });
    periodSelect.value = document.querySelector('.period-amount').textContent = '1';

    this.budget = 0; // Доход за месяц
    this.budgetDay = 0; // budget / 30
    this.budgetMonth = 0;
    this.income = {}; // Дополнительные доходы
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {}; // Обазятельные статьи расходов
    this.expensesMonth = 0;
    this.addExpenses = []; // Дополнительные расходы
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    this.blockStart();
  },
  showResult: function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay * 100) / 100;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
  },
  addExpensesBlock: function () {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);

    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);

    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getExpenses: function () {
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector('.expenses-title').value;
      const cashExpenses = item.querySelector('.expenses-amount').value;

      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector('.income-title').value;
      const cashIncome = item.querySelector('.income-amount').value;

      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = +cashIncome;
        this.incomeMonth += +cashIncome;
      }
    });
  },
  getAddExpenses: function () {
    const addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach((item) => {
      item = item.trim();

      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();

      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    for (let elem in this.expenses) {
      this.expensesMonth += this.expenses[elem];
    }
  },
  getBudget: function () {
    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function () {
    return targetAmount.value / this.budgetMonth;
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
  getIfoDeposit: function () {
    // if (appData.deposit) {
    //   let n = 0;
    //
    //   do {
    //     n = prompt('Какой годовой процент?', '10');
    //   } while (!isNumber(n) && n > 0);
    //
    //   do {
    //     appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
    //   } while (!isNumber(n) && n > 0);
    //
    //   appData.percentDeposit = +n;
    //   appData.moneyDeposit = +n;
    // }
    this.moneyDeposit = 0;
  },
  calcPeriod: function () {
    return this.budgetMonth * periodSelect.value;
  },
  changePeriodSelect: function (event) {
    document.querySelector('.period-amount').textContent = event.target.value;
    incomePeriodValue.value = appData.calcPeriod();
  },
  blockStart: function () {
    start.disabled = !salaryAmount.value.trim();
  },
};

const addEventChangeNumber = function (event) {
  let tmpValue = event.target.value.trim();

  const changeInputNumber = function (event) {
    if (!/^[\d]+$/.test(event.target.value.trim()) && event.target.value.trim() !== '') {
      alert('Доупускается ввод только цифр!');

      event.target.value = tmpValue;
      event.target.removeEventListener('input', changeInputNumber);
    }
    tmpValue = event.target.value.trim();
  };
  event.target.addEventListener('input', changeInputNumber);
};

const addEventChangeText = function (event) {
  let tmpValue = event.target.value;

  const changeInputText = function (event) {
    if (!/^[,. а-яА-ЯёЁ]+$/.test(event.target.value) && event.target.value !== '') {
      alert('Доупускается ввод только русских букв, пробела, точки и запятой!');

      event.target.value = tmpValue;
      event.target.removeEventListener('input', changeInputText);
    }
    tmpValue = event.target.value;
  };
  event.target.addEventListener('input', changeInputText);
};

const goNow = appData.start.bind(appData);

appData.blockStart();

start.addEventListener('click', goNow);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.changePeriodSelect);
salaryAmount.addEventListener('input', appData.blockStart);

document.querySelectorAll('[placeholder="Наименование"]').forEach((input) => {
  input.addEventListener('focus', addEventChangeText);
});
document.querySelectorAll('[placeholder="Сумма"]').forEach((input) => {
  input.addEventListener('focus', addEventChangeNumber);
});
