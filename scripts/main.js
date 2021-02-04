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
let budgetDay;
let accumulatedMonth;
let period; 


function showTypeOf(data){
  console.log(typeof data);
}

function getExpensesMonth(){
 return  amount1 + amount2;
}

function getAccumulatedMonth(){
  return money - getExpensesMonth();
}

function getTargetMonth(){
  return Math.ceil(mission/accumulatedMonth);
}


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

getExpensesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth/30);
period = getTargetMonth();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(getExpensesMonth());
console.log(addExpenses.split(','));
// console.log('Цель заработать ' + mission + ' рублей');
console.log('Период: ', period);
console.log('Ежедневный бюджет:', budgetDay);
console.log(getStatusIncome());