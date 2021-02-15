"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let expenses1;
let expenses2;
let budgetDay;
let accumulatedMonth;

function letsGo() {
  do {
    money = prompt("Ваш ежемесячный доход?");
  } while (!isNumber(money));
}

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 300000,
  period: 3,
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у Вас депозит в банке?");
    for (let i = 0; i < 2; i++) {
      let ask = prompt("Введите обязательную статью расходов?");
      // appData.expenses += +prompt("Во сколько это обойдется?");
      while (!isNumber(appData.expenses)) {
        let exp = +prompt("Во сколько это обойдется?");
      }
    }
    return appData.expenses;
  },
  getExpensesMonth: function () {},
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
};
appData.asking();
console.log(appData.expenses);

appData.getAccumulatedMonth = function () {
  return money - appData.getExpensesMonth();
};

appData.getTargetMonth = function () {
  return Math.ceil(appData.mission / accumulatedMonth);
};

function getStatusTarget() {
  if (appData.period > 0) {
    console.log("Цель будет достигнута!");
  } else if (appData.period < 0) {
    console.log("Цель не будет достигнута!");
  }
}

appData.getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return "У Вас высокий уровень дохода!";
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return "У вас средний уровень дохода";
  } else if (budgetDay < 600 && budgetDay > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (budgetDay < 0) {
    return "Что то пошло не так";
  }
};

// start();
letsGo();
accumulatedMonth = appData.getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);
appData.period = appData.getTargetMonth();
getStatusTarget();

// console.log(getExpensesMonth());
console.log(appData.addExpenses);
// console.log('Цель заработать ' + mission + ' рублей');
console.log("Период: ", appData.period);
console.log("Ежедневный бюджет:", budgetDay);
console.log(appData.getStatusIncome());
console.log(appData.expenses);
