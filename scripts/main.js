'use strict';

let money = prompt("Ваш ежемесячный доход?");
let income = "Такси";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase();
let deposit = confirm("Есть ли у Вас депозит в банке?"); 
let mission = 300000;
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введи еще одну важную статью расходов?");
let amount2 = prompt("Во сколько это обойдется?");
let budgetMonth = (money - amount1 - amount2); 
let budgetDay = Math.floor(budgetMonth/30);
let period = Math.ceil(mission/budgetMonth);

switch (true) {
  case budgetDay >= 1200: 
    console.log("У Вас высокий уровень дохода!");
    break;
  case budgetDay >= 600 && budgetDay < 1200: 
    console.log("У вас средний уровень дохода");
    break;
  case budgetDay < 600 && budgetDay > 0: 
    console.log("К сожалению у вас уровень дохода ниже среднего");
    break;
  case budgetDay < 0:
    console.log("Что то пошло не так");
    break;
}; 

// if (budgetDay >= 1200) {
//   console.log("У Вас высокий уровень дохода!");
// } else if (budgetDay >= 600 && budgetDay < 1200) {
//   console.log("У вас средний уровень дохода");
// } else if (budgetDay < 600 && budgetDay > 0) {
//   console.log("К сожалению у вас уровень дохода нgit иже среднего");
// } else if (budgetDay < 0) {
//   console.log("Что то пошло не так");
// };


// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев' );
console.log('Цель заработать ' + mission + ' рублей');
console.log('Бюджет на месяц: ',  budgetMonth);
console.log('Период: ', period);
console.log('Ежедневный бюджет:', budgetDay);