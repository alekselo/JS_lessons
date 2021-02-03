'use strict';

let money = parseInt(prompt("Ваш ежемесячный доход?"));
let income = "Такси";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase();
let deposit = confirm("Есть ли у Вас депозит в банке?"); 
let mission = 300000;
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = parseInt(prompt("Во сколько это обойдется?"));
let expenses2 = prompt("Введи еще одну важную статью расходов?");
let amount2 = parseInt(prompt("Во сколько это обойдется?"));
let accumulatedMonth;
let budgetDay = Math.floor(accumulatedMonth/30);
let period; /*= Math.ceil(mission/budgetMonth); */
let sumExpenses;

function showTypeOf(data){
  console.log(typeof data);
}

function getExpensesMonth(){
 return sumExpenses = amount1 + amount2;
}
getExpensesMonth();

function getAccumulatedMonth(){
  return accumulatedMonth = money - sumExpenses;
}
getAccumulatedMonth();

function getTargetMonth(){
  return period = Math.ceil(mission/accumulatedMonth);
}
getTargetMonth();

let getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ("У Вас высокий уровень дохода!");
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay > 0) {
    return ("К сожалению у вас уровень дохода нgit иже среднего");
  } else if (budgetDay < 0) {
    return ("Что то пошло не так");
  };
}


showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(sumExpenses);
console.log(addExpenses.split(' '));
console.log('Цель заработать ' + mission + ' рублей');
console.log('Период: ', period);
console.log('Ежедневный бюджет:', budgetDay);
showTypeOf(budgetDay);
console.log(getStatusIncome());