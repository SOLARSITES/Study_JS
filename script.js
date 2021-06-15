'use strict';

const start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[0], // + Дополнительный доход
  expensesPlus = btnPlus[1], // + Возможные расходы
  depositCheck = document.querySelector('#deposit-check'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], // Возможные расходы
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0], // Накопления за период
  targetMonthValue = document.getElementsByClassName('target_month-value')[0], // Срок достижения цели в месяцах
  salaryAmount = document.querySelector('.salary-amount'), // Месячный доход
  periodSelect = document.querySelector('.period-select'), // range
  periodAmount = document.querySelector('.period-amount'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'), // Возможный доход
  additionalExpensesItem = document.querySelector('.additional_expenses-item'), // Возможные расходы
  targetAmount = document.querySelector('.target-amount'); // Цель

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
      this.getExpensesMonth();
      this.getAdd();
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

  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);

    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getInfoDeposit() {
    this.moneyDeposit = 0;
    this.percentDeposit = 0;

    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
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
    targetMonthValue.value = targetAmount.value ? Math.ceil(this.getTargetMonth()) : '';
    incomePeriodValue.value = this.calcPeriod();
  }

  blockage(disabled = true) {
    document.querySelectorAll('.data input[type=text]').forEach((item) => {
      item.disabled = disabled;
    });
    depositCheck.disabled = disabled;
    depositBank.disabled = disabled;
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
    depositCheck.checked = false;

    this.depositHandler();

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

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  changePeriodSelect() {
    periodAmount.textContent = event.target.value;
    incomePeriodValue.value = this.calcPeriod();
  }

  blockStart() {
    start.disabled =
      !salaryAmount.value.trim() ||
      (depositCheck.checked && !(depositPercent.value.trim() && depositAmount.value.trim()));
  }

  check() {
    const target = event.target;
    let tmpValue = target.value.trim();

    const changeInputNumber = () => {
      let condition = /.+/;
      let textAlert;
      let validPercent = true;

      if (target.placeholder === 'Наименование') {
        condition = /^[,. а-яА-ЯёЁ]+$/;
        textAlert = 'Разрешается ввод только русских букв, пробелов и знаков препинания!';
      }
      if (target.placeholder === 'Сумма') {
        condition = /^[\d.]+$/;
        textAlert = 'Разрешается ввод только цифр!';
      }
      if (target.placeholder === 'Процент') {
        condition = /^[\d.]+$/;
        textAlert = 'Введите корректное значение в поле проценты!';
        validPercent = +target.value.trim() > 0 && +target.value.trim() < 100;
      }
      if ((!condition.test(target.value.trim()) && target.value.trim()) || !validPercent) {
        alert(textAlert);
        target.value = tmpValue;
      }
      target.removeEventListener('change', changeInputNumber);
    };
    target.addEventListener('change', changeInputNumber);
  }

  depositPercent() {
    const valueIndex = this.value;

    if (!valueIndex) {
      depositAmount.disabled = true;
    } else {
      depositAmount.disabled = false;

      if (valueIndex === 'other') {
        depositPercent.style.display = 'inline-block';
        depositPercent.value = '';
      } else {
        depositPercent.style.display = 'none';
        depositPercent.value = valueIndex;
      }
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      depositAmount.disabled = true;
      this.deposit = true;
      depositBank.addEventListener('change', this.depositPercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      depositPercent.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.depositPercent);
    }
    this.blockStart();
  }

  eventsListeners() {
    this.blockStart();

    start.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener('click', this.addBlock);
    incomePlus.addEventListener('click', this.addBlock);
    periodSelect.addEventListener('input', this.changePeriodSelect.bind(this));
    salaryAmount.addEventListener('input', this.blockStart);
    depositAmount.addEventListener('input', this.blockStart);
    depositPercent.addEventListener('input', this.blockStart);
    document.querySelectorAll('.data input').forEach((input) => {
      input.addEventListener('focus', this.check);
    });
    depositAmount.addEventListener('focus', this.check);
    depositPercent.addEventListener('focus', this.check);
    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }
}

const appData = new AppData();

appData.eventsListeners();
