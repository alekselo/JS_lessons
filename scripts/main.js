"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const btnStart = document.getElementById("start");
const btnPlusIncome = document.getElementsByTagName("button")[0];
const btnPlusExpenses = document.getElementsByTagName("button")[1];
const depositCheckbox = document.querySelector("#deposit-check");
const addIncomeItem = document.querySelectorAll(".additional_income-item");
const budgetMonthValue = document.getElementsByClassName(
  "budget_month-value"
)[0];
const budgetDayValue = document.getElementsByClassName("budget_day-value")[0];
const expensesMonthValue = document.getElementsByClassName(
  "expenses_month-value"
)[0];
const inputAddIncome = document.getElementsByClassName(
  "additional_income-value"
)[0];
const addExpensesValue = document.getElementsByClassName(
  "additional_expenses-value"
)[0];
const inputPeriodValue = document.getElementsByClassName(
  "income_period-value"
)[0];
const inputTargetMonth = document.getElementsByClassName(
  "target_month-value"
)[0];
const salaryAmount = document.querySelector(".salary-amount");
const incomeTitle = document.querySelector(
  "div.income-items input.income-title"
);
const incomeAmount = document.querySelector(".income-amount");
const expensesTitle = document.querySelector(
  "div.expenses-items input.expenses-title"
);
let expensesItems = document.querySelectorAll(".expenses-items");
const addExpensesItem = document.querySelector(".additional_expenses-item");
const targetAmout = document.querySelector(".target-amount");
const periodSelect = document.querySelector(".period-select");

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 300000,
  period: 3,
  start: function () {
    if (salaryAmount.value === "") {
      alert('Ошибка! Поле "Месячный доход" должно быть заполнено!');
      return;
    }
    appData.budget = salaryAmount.value;
    appData.getBudget();
    appData.getExpensesMonth();
    appData.getExpenses();
    appData.getAddExpenses();
    appData.showResult();
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(
      cloneExpensesItem,
      btnPlusExpenses
    );
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      btnPlusExpenses.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },
  getAddExpenses: function () {
    let addExpenses = addExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    addExpensesValue.value = appData.addExpenses.join(", ");
  },
  asking: function () {
    if (confirm("Есть у Вас дополнительный источник заработка?")) {
      let itemIncome;
      let cashIncome;
      do {
        itemIncome = prompt("Какой у Вас доп. источник заработка?");
      } while (isNumber(itemIncome));
      do {
        cashIncome = prompt("Сколько в месяц он Вам приносит?");
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses
      .toLowerCase()
      .split(",")
      .map(
        (item) =>
          (item =
            item.trim().charAt(0).toUpperCase() +
            item.trim().substr(1).toLowerCase())
      );
    appData.deposit = confirm("Есть ли у Вас депозит в банке?");
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};

btnStart.addEventListener("click", appData.start);
btnPlusExpenses.addEventListener("click", appData.addExpensesBlock);

appData.getBudget = function () {
  appData.budgetMonth = appData.budget - appData.expensesMonth;
  appData.budgetDay = appData.budgetMonth / 30;
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

appData.getInfoDeposit = function () {
  if (appData.deposit) {
    do {
      appData.percentDeposit = prompt("Какой у Вас процент депозита?");
    } while (!isNumber(appData.percentDeposit));
    do {
      appData.moneyDeposit = prompt("Какая сумма заложена?");
    } while (!isNumber(appData.moneyDeposit));
  }
};

let overall = function () {
  console.log("Наша программа включает в себя данные: ");
  for (let key in appData) {
    console.log("Свойство: " + key + " Значение: " + appData[key]);
  }
};

appData.period = appData.getTargetMonth();
// setTimeout(overall, 1000);
appData.getInfoDeposit();
appData.calcSavedMoney();
