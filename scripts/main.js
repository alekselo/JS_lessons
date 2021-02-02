let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;
let budgetDay = money/30;

money = 50000;
income = "Такси";
addExpenses = "Еда, Вода, Бензин, Одежда";
deposit = true;
mission = 300000;
period = 6;


addExpenses = addExpenses.toLowerCase();

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев' );
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.split(' '));
console.log(budgetDay);
