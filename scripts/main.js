'use strict';

let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;
let expenses1;
let expenses2;
let amount1;
let amount2;
let budgetDay;
let budgetMonth; 

money = 50000;
income = "Такси";
addExpenses = "Еда, Вода, Бензин, Одежда";
deposit = true;
mission = 300000;
period = 6;

money = prompt("Ваш ежемесячный доход?");
budgetDay = money/30;
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses = addExpenses.toLowerCase();
deposit = confirm("Есть ли у Вас депозит в банке?");
expenses1 = prompt("Введите обязательную статью расходов?");
amount1 = prompt("Во сколько это обойдется?");
expenses2 = prompt("Введи еще одну важную статью расходов?");
amount2 = prompt("Во сколько это обойдется?");
budgetMonth = (money - amount1 - amount2);
period = Math.ceil(mission/budgetMonth);
budgetDay = Math.floor(budgetMonth/30);


// switch (budgetDay) {
//   case budgetDay >= 1200: 
//     console.log("У Вас высокий уровень дохода!");
//     break;
//   case budgetDay >= 600 && budgetDay < 1200: 
//     console.log("У вас средний уровень дохода");
//     break;
//   case budgetDay < 600: 
//     console.log("К сожалению у вас уровень дохода ниже среднего");
//     break;
//   case budgetDay < 0:
//     console.log("Что то пошло не так");
//     break;
// }; 

if (budgetDay >= 1200) {
  console.log("У Вас высокий уровень дохода!");
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 600) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
  console.log("Что то пошло не так");
}


// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев' );
console.log('Цель заработать ' + mission + ' рублей');
// console.log(addExpenses.split(','));
console.log('Бюджет на месяц: ',  budgetMonth);
console.log('Период: ', period);
console.log('Ежедневный бюджет:', budgetDay);