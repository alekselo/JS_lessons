"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

function start() {
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
      let sum = 0;
      let expenses = {};
      expenses = prompt("Введите обязательную статью расходов?");
      do {
        sum = +prompt("Во сколько это обойдется?");
      } while (!isNumber(sum));
      appData.expenses[expenses] = +sum;
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
    return appData.expensesMonth;
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
};
appData.asking();

appData.getBudget = function () {
  appData.budgetMonth = money - appData.expensesMonth;
  appData.budgetDay = appData.budgetMonth / 30;
  return appData.budgetMonth, appData.budgetDay;
};

appData.getTargetMonth = function () {
  return Math.ceil(appData.mission / appData.budgetMonth);
};

function getStatusTarget() {
  if (appData.period > 0) {
    console.log("Цель будет достигнута!");
  } else if (appData.period < 0) {
    console.log("Цель не будет достигнута!");
  }
}

appData.getStatusIncome = function () {
  if (appData.budgetDay >= 1200) {
    return "У Вас высокий уровень дохода!";
  } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
    return "У вас средний уровень дохода";
  } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (appData.budgetDay < 0) {
    return "Что то пошло не так";
  }
};

let overall = function () {
  console.log("Наша программа включает в себя данные: ");
  for (let key in appData) {
    console.log("Свойство: " + key + " Значение: " + appData[key]);
  }
};

start();

appData.getExpensesMonth();
appData.getBudget();
appData.period = appData.getTargetMonth();
setTimeout(overall, 1000);

console.log(
  "Расходы за месяц составляют " + appData.expensesMonth + " рублей!"
);
console.log("Цель будет достигнута за " + appData.period + " месяцев!");
console.log(appData.getStatusIncome());
