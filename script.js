'use strict';

const buttonStart = document.getElementById('start');

const buttonIncomeAdd = document.getElementsByTagName('button')[0];

const buttonExpensesAdd = document.getElementsByTagName('button')[1];

const inputDepositCheck = document.querySelector('#deposit-check');

const inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item');

const inputBudgetDayValue = document.getElementsByClassName('budget_day-value');

const inputExpensesMonthValue = document.getElementsByClassName('expenses_month-value');

const inputAdditionalIncomeValue = document.getElementsByClassName('additional_income-value');

const inputAdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value');

const inputIncomePeriodValue = document.getElementsByClassName('income_period-value');

const inputTargetMonthValue = document.getElementsByClassName('target_month-value');

const inputSalaryAmount = document.querySelector('.salary-amount');

const divIncomeItems = document.querySelector('.income-items');
const inputIncomeTitle = divIncomeItems.children[0];
const inputIncomeAmount = divIncomeItems.children[1];

const divExpensesItems = document.querySelector('.expenses-items');
const inputExpensesTitle = divExpensesItems.children[0];
const inputExpensesAmount = divExpensesItems.children[1];

const inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item');

const inputTargetAmount = document.querySelector('.target-amount');

const inputPeriodSelect = document.querySelector('.period-select');

// let money;
//
// const isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };
//
// const isString = function (str, comma = false) {
//   const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
//   return pattern.test(str);
// };
//
// const start = function () {
//   do {
//     money = prompt('Ваш месячный доход?', '50000');
//   } while (!isNumber(money));
// };
//
// start();
//
// let appData = {
//   budget: money, // Доход за месяц
//   budgetDay: 0, // budget / 30
//   budgetMonth: 0,
//   income: {}, // Дополнительные доходы
//   addIncome: [],
//   expenses: {}, // Обазятельные статьи расходов
//   addExpenses: [], // Дополнительные расходы
//   expensesMonth: 0,
//   deposit: false,
//   percentDeposit: 0,
//   moneyDeposit: 0,
//   mission: 200000,
//   period: 3,
//   asking: function () {
//     if (confirm('Есть ли у вас дополнительный источник заработка?')) {
//       let itemIncome;
//       let cashIncome;
//
//       do {
//         itemIncome = prompt('Какой у вас дополнительный заработок?', 'Подрабатываю');
//       } while (!isString(itemIncome));
//
//       do {
//         cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
//       } while (!isNumber(cashIncome));
//
//       appData.income[itemIncome] = Number(cashIncome);
//     }
//
//     let addExpenses = prompt(
//       'Перечислите возможные расходы за рассчитываемый период через запятую',
//       'Транспорт, коммуналка, интернет',
//     );
//
//     appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
//     appData.deposit = confirm('Есть ли у вас депозит в банке?');
//
//     for (let i = 0; i < 2; i++) {
//       let itemExpenses;
//       let cashExpenses;
//
//       do {
//         itemExpenses = prompt('Введите обязательную статью расходов?');
//       } while (!isString(itemExpenses));
//
//       do {
//         cashExpenses = prompt('Во сколько это обойдется?', '2500');
//       } while (!isNumber(cashExpenses));
//
//       appData.expenses[itemExpenses] = Number(cashExpenses);
//     }
//   },
//   getExpensesMonth: function () {
//     for (let item in appData.expenses) {
//       appData.expensesMonth += appData.expenses[item];
//     }
//   },
//   getBudget: function () {
//     appData.budgetMonth = appData.budget - appData.expensesMonth;
//     appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//   },
//   getTargetMonth: function () {
//     return Math.ceil(appData.mission / appData.budgetMonth);
//   },
//   getStatusIncome: function () {
//     if (appData.budgetDay >= 1200) {
//       return 'У Вас высокий уровень дохода';
//     } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
//       return 'У Вас средний уровень дохода';
//     } else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
//       return 'К сожалению, у Вас уровень дохода ниже среднего';
//     } else {
//       return 'Что-то пошло не так';
//     }
//   },
//   getInfoDeposit: function () {
//     if (appData.deposit) {
//       let percentDeposit;
//       let moneyDeposit;
//
//       do {
//         percentDeposit = prompt('Какой годовой процент?', '10');
//       } while (!isNumber(percentDeposit));
//
//       do {
//         moneyDeposit = prompt('Какая сумма заложена?', '10000');
//       } while (!isNumber(moneyDeposit));
//
//       appData.percentDeposit = Number(percentDeposit);
//       appData.moneyDeposit = Number(moneyDeposit);
//     }
//   },
//   calcSavedMoney: function () {
//     return appData.budgetMonth * appData.period;
//   },
// };
//
// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
//
// appData.getTargetMonth() >= 0
//   ? console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев(-а)')
//   : console.log('Цель не будет достигнута');
//
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

console.log(buttonStart);
console.log(buttonIncomeAdd);
console.log(buttonExpensesAdd);
console.log(inputDepositCheck);
console.log(inputAdditionalIncomeItem);
console.log(inputBudgetDayValue);
console.log(inputExpensesMonthValue);
console.log(inputAdditionalIncomeValue);
console.log(inputAdditionalExpensesValue);
console.log(inputIncomePeriodValue);
console.log(inputTargetMonthValue);
console.log(inputSalaryAmount);
console.log(inputIncomeTitle);
console.log(inputIncomeAmount);
console.log(inputExpensesTitle);
console.log(inputExpensesAmount);
console.log(inputAdditionalExpensesItem);
console.log(inputTargetAmount);
console.log(inputPeriodSelect);
