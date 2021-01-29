let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;

money = 50000;
income = "Такси";
addExpenses = "Еда, Вода, Бензин, Одежда";
deposit = true;
mission = 300000;
period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев' );
console.log('Цель заработать ' + mission + ' рублей');
addExpenses = addExpenses.toLowerCase();


console.log(addExpenses.split(' '));

let budgetDay = money/30;

console.log(budgetDay);
