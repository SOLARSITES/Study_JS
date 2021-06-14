'use strict';

const start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[0], // + Дополнительный доход
  expensesPlus = btnPlus[1], // + Возможные расходы
  depositCheck = document.querySelector('#deposit-check'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], // Возможные расходы
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0], // Накопления за период
  targetMonthValue = document.getElementsByClassName('target_month-value')[0], // Срок достижения цели в месяцах
  salaryAmount = document.querySelector('.salary-amount'), // Месячный доход
  // additionalExpenses = document.querySelector('.additional_expenses'),
  periodSelect = document.querySelector('.period-select'), // range
  periodAmount = document.querySelector('.period-amount'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'), // Возможный доход
  additionalExpensesItem = document.querySelector('.additional_expenses-item'), // Возможные расходы
  targetAmount = document.querySelector('.target-amount'); // Цель

// const isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };
//
// const isString = function (str, comma = false) {
//   const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
//   return pattern.test(str);
// };

class AppData {
  constructor() {
    this.budget = 0; // Доход за месяц
    this.budgetDay = 0; // budget / 30
    this.budgetMonth = 0;
    this.income = {}; // Дополнительные доходы
    this.incomeMonth = 0;
    this.expenses = {}; // Обазятельные статьи расходов
    this.expensesMonth = 0;
    this.addIncome = [];
    this.addExpenses = []; // Дополнительные расходы
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  start() {
    if (start.textContent === 'Рассчитать') {
      this.getExpInc();
      // this.getExpenses();
      // this.getIncome();
      this.getExpensesMonth();
      this.getAdd();
      // this.getAddExpenses();
      // this.getAddIncome();
      this.getInfoDeposit();
      this.getBudget();
      this.getStatusIncome();
      this.showResult();
      this.blockage();
      start.textContent = 'Сбросить';
    } else {
      start.textContent = 'Рассчитать';
      this.reset();
    }
    console.dir(this);
  }

  getExpInc() {
    const count = (item) => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;

      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = +itemAmount;
        this.incomeMonth += startStr === 'income' ? +itemAmount : null;
      }
    };

    document.querySelectorAll('.income-items').forEach(count);
    document.querySelectorAll('.expenses-items').forEach(count);
  }

  // getExpenses() {
  //   expensesItems.forEach((item) => {
  //     const itemExpenses = item.querySelector('.expenses-title').value;
  //     const cashExpenses = item.querySelector('.expenses-amount').value;
  //
  //     if (itemExpenses !== '' && cashExpenses !== '') {
  //       this.expenses[itemExpenses] = +cashExpenses;
  //     }
  //   });
  // }

  // getIncome() {
  //   incomeItems.forEach((item) => {
  //     const itemIncome = item.querySelector('.income-title').value;
  //     const cashIncome = item.querySelector('.income-amount').value;
  //
  //     if (itemIncome !== '' && cashIncome !== '') {
  //       this.income[itemIncome] = +cashIncome;
  //       this.incomeMonth += +cashIncome;
  //     }
  //   });
  // }

  getExpensesMonth() {
    for (let elem in this.expenses) {
      this.expensesMonth += this.expenses[elem];
    }
  }

  getAdd() {
    const joinElem = (item) => {
      return item.map((el) => el.trim()).filter((el) => el !== '');
    };

    this.addExpenses = joinElem(additionalExpensesItem.value.split(','));
    this.addIncome = joinElem([additionalIncomeItem[0].value, additionalIncomeItem[1].value]);
  }

  // getAddExpenses() {
  //   const addExpenses = additionalExpensesItem.value.split(',');
  //
  //   addExpenses.forEach((item) => {
  //     item = item.trim();
  //
  //     if (item !== '') {
  //       this.addExpenses.push(item);
  //     }
  //   });
  // }

  // getAddIncome() {
  //   additionalIncomeItem.forEach((item) => {
  //     const itemValue = item.value.trim();
  //
  //     if (itemValue !== '') {
  //       this.addIncome.push(itemValue);
  //     }
  //   });
  // }

  getBudget() {
    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  }

  getInfoDeposit() {
    // if (this.deposit) {
    //   let n = 0;
    //
    //   do {
    //     n = prompt('Какой годовой процент?', '10');
    //   } while (!isNumber(n) && n > 0);
    //
    //   do {
    //     this.moneyDeposit = prompt('Какая сумма заложена?', '10000');
    //   } while (!isNumber(n) && n > 0);
    //
    //   this.percentDeposit = +n;
    //   this.moneyDeposit = +n;
    // }
    this.moneyDeposit = 0;
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return 'У Вас высокий уровень дохода';
    } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
      return 'У Вас средний уровень дохода';
    } else if (this.budgetDay >= 0 && this.budgetDay <= 600) {
      return 'К сожалению, у Вас уровень дохода ниже среднего';
    } else {
      return 'Что-то пошло не так';
    }
  }

  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }

  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay * 100) / 100;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
  }

  blockage(disabled = true) {
    document.querySelectorAll('.data input[type=text]').forEach((item) => {
      item.disabled = disabled;
    });
    document.querySelector('.data input[type=checkbox]').disabled = disabled;
    incomePlus.disabled = disabled;
    expensesPlus.disabled = disabled;
  }

  reset() {
    const excessRemoval = (item) => {
      for (let i = item.length - 1; i > 0; i--) {
        item[0].parentNode.removeChild(item[i]);
      }
    };

    excessRemoval(document.querySelectorAll('.income-items'));
    excessRemoval(document.querySelectorAll('.expenses-items'));

    this.blockage(false);

    incomePlus.style.display = '';
    expensesPlus.style.display = '';

    document.querySelectorAll('input[type=text]').forEach((item) => {
      item.value = '';
    });

    periodSelect.value = periodAmount.textContent = '1';

    this.budget = 0; // Доход за месяц
    this.budgetDay = 0; // budget / 30
    this.budgetMonth = 0;
    this.income = {}; // Дополнительные доходы
    this.incomeMonth = 0;
    this.expenses = {}; // Обазятельные статьи расходов
    this.expensesMonth = 0;
    this.addIncome = [];
    this.addExpenses = []; // Дополнительные расходы
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    this.blockStart();
  }

  addBlock() {
    const target = event.target;
    const startStr = target.parentNode.className;
    const cloneItem = document.querySelector(`.${startStr}-items`).cloneNode(true);

    cloneItem.querySelector(`.${startStr}-title`).value = '';
    cloneItem.querySelector(`.${startStr}-amount`).value = '';
    target.parentNode.insertBefore(cloneItem, target);

    if (document.querySelectorAll(`.${startStr}-items`).length === 3) {
      target.style.display = 'none';
    }
  }

  // addExpensesBlock() {
  //   const cloneExpensesItem = expensesItems[0].cloneNode(true);
  //
  //   cloneExpensesItem.querySelector('.expenses-title').value = '';
  //   cloneExpensesItem.querySelector('.expenses-amount').value = '';
  //   expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  //   expensesItems = document.querySelectorAll('.expenses-items');
  //
  //   if (expensesItems.length === 3) {
  //     expensesPlus.style.display = 'none';
  //   }
  // }

  // addIncomeBlock() {
  //   const cloneIncomeItem = incomeItems[0].cloneNode(true);
  //
  //   cloneIncomeItem.querySelector('.income-title').value = '';
  //   cloneIncomeItem.querySelector('.income-amount').value = '';
  //   incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  //   incomeItems = document.querySelectorAll('.income-items');
  //
  //   if (incomeItems.length === 3) {
  //     incomePlus.style.display = 'none';
  //   }
  // }

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  changePeriodSelect(event) {
    document.querySelector('.period-amount').textContent = event.target.value;
    incomePeriodValue.value = this.calcPeriod();
  }

  blockStart() {
    start.disabled = !salaryAmount.value.trim();
  }

  check(event) {
    let tmpValue = event.target.value.trim();
    let target = event.target;

    const changeInputNumber = (event) => {
      let condition = /.+/;
      let textAlert;

      if (target.placeholder === 'Наименование') {
        condition = /^[,. а-яА-ЯёЁ]+$/;
        textAlert = 'Разрешается ввод только русских букв, пробелов и знаков препинания!';
      }

      if (target.placeholder === 'Сумма') {
        condition = /^[\d]+$/;
        textAlert = 'Разрешается ввод только цифр!';
      }

      if (!condition.test(event.target.value.trim()) && event.target.value.trim() !== '') {
        alert(textAlert);
        target.value = tmpValue;
        target.removeEventListener('input', changeInputNumber);
      }
      tmpValue = event.target.value.trim();
    };
    target.addEventListener('input', changeInputNumber);
  }

  eventsListeners() {
    this.blockStart();

    start.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener('click', this.addBlock);
    incomePlus.addEventListener('click', this.addBlock);
    periodSelect.addEventListener('input', this.changePeriodSelect.bind(this));
    salaryAmount.addEventListener('input', this.blockStart);
    document.querySelectorAll('.data input').forEach((input) => {
      input.addEventListener('focus', this.check);
    });
  }
}

const appData = new AppData();

appData.eventsListeners();
