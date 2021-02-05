'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
}

let money;
let income = "Такси";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase();
let deposit = confirm("Есть ли у Вас депозит в банке?"); 
let mission = 300000;
let expenses1;
// let amount1 = parseInt(prompt("Во сколько это обойдется?"));
let expenses2;
// let amount2 = parseInt(prompt("Во сколько это обойдется?"));
let budgetDay;
let accumulatedMonth;
let period; 

// function start(){
//   money = prompt("Ваш ежемесячный доход?");

//   while (!isNumber(money)){
//     money = prompt("Ваш ежемесячный доход?");
//   }
// }

function letsGo(){
  do {
    money = prompt("Ваш ежемесячный доход?");
  } while (!isNumber(money));
}

function showTypeOf(data){
  console.log(typeof data);
}

function getExpensesMonth(){
  let sum = 0;
  for (let i = 0; i < 2; i++){
    if (i === 0){
      expenses1 = prompt("Введите обязательную статью расходов?");
    } else if ( i === 1){
      expenses2 = prompt("Введи еще одну важную статью расходов?");
    }
    sum += +prompt("Во сколько это обойдется?");
    while (!isNumber(sum)){
      sum = +prompt("Во сколько это обойдется?");
    }
  }
  console.log(sum);
  return sum;
};

function getAccumulatedMonth(){
  return money - getExpensesMonth();
};

function getTargetMonth(){
  return Math.ceil(mission/accumulatedMonth);
};

function getStatusTarget(){
  if (period > 0){
    console.log("Цель будет достигнута!");
  } else if (period < 0){
    console.log("Цель не будет достигнута!");
  }
};



let getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ("У Вас высокий уровень дохода!");
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay > 0) {
    return ("К сожалению у вас уровень дохода ниже среднего");
  } else if (budgetDay < 0) {
    return ("Что то пошло не так");
  }
};


// start();
letsGo();
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth/30);
period = getTargetMonth();
getStatusTarget();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// console.log(getExpensesMonth());
console.log(addExpenses.split(','));
// console.log('Цель заработать ' + mission + ' рублей');
console.log('Период: ', period);
console.log('Ежедневный бюджет:', budgetDay);
console.log(getStatusIncome());