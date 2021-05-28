let money = 30000;
let income = 'Фриланс';
let addExpenses = 'Коммуналка, Транспорт, Интернет';
let deposit = true;
let mission = 1000000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

let lowerCase = addExpenses.toLocaleLowerCase();
let showArray = lowerCase.split(', ');
console.log(showArray);

let budgetDay = money / 30;
console.log(budgetDay);
