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
const addIncomeValue = document.getElementsByClassName(
  "additional_income-value"
)[0];
const addExpensesValue = document.getElementsByClassName(
  "additional_expenses-value"
)[0];
const incomePeriodValue = document.getElementsByClassName(
  "income_period-value"
)[0];
const targetMonthValue = document.getElementsByClassName(
  "target_month-value"
)[0];
const salaryAmount = document.querySelector(".salary-amount");
const incomeTitle = document.querySelector(
  "div.income-items input.income-title"
);
let incomeItems = document.querySelectorAll(".income-items");
const expensesTitle = document.querySelector(
  "div.expenses-items input.expenses-title"
);
let expensesItems = document.querySelectorAll(".expenses-items");
const addExpensesItem = document.querySelector(".additional_expenses-item");
const targetAmout = document.querySelector(".target-amount");
const periodSelect = document.querySelector(".period-select");
const periodAmount = document.querySelector(".period-amount");

let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  incomeMonth: 0,
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function () {
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getIncomeMonth();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    addExpensesValue.value = appData.addExpenses.join(", ");
    addIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSavedMoney();
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
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value;
      let cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        appData.income[itemIncome] = +cashIncome;
      }
    });
  },
  getIncomeMonth: function () {
    for (let key in appData.income) {
      appData.incomeMonth += appData.income[key];
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncome);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      btnPlusIncome.style.display = "none";
    }
  },
  getAddIncome: function () {
    addIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
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
  getBudget: function () {
    appData.budget = +salaryAmount.value;
    appData.budgetMonth =
      +appData.budget - appData.expensesMonth + appData.incomeMonth;
    appData.budgetDay = +appData.budgetMonth / 30;
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getTargetMonth: function () {
    return targetAmout.value / appData.budgetMonth;
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return "У Вас высокий уровень дохода!";
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return "У вас средний уровень дохода";
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else if (appData.budgetDay < 0) {
      return "Что то пошло не так";
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt("Какой у Вас процент депозита?");
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt("Какая сумма заложена?");
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * periodSelect.value;
  },
  selectPeriodValue: function () {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.calcSavedMoney();
  },
};

btnStart.addEventListener("click", function () {
  if (salaryAmount.value === "") {
    alert("Поле 'Месячный доход' должно быть заполнено!");
    return;
  } else {
    appData.start();
  }
});
btnPlusExpenses.addEventListener("click", appData.addExpensesBlock);
btnPlusIncome.addEventListener("click", appData.addIncomeBlock);
periodSelect.addEventListener("change", appData.selectPeriodValue);

function getStatusTarget() {
  if (appData.period > 0) {
    console.log("Цель будет достигнута!");
  } else if (appData.period < 0) {
    console.log("Цель не будет достигнута!");
  }
}

appData.period = appData.getTargetMonth();

// let overall = function () {
//   console.log("Наша программа включает в себя данные: ");
//   for (let key in appData) {
//     console.log("Свойство: " + key + " Значение: " + appData[key]);
//   }
// };

// setTimeout(overall, 1000);
// appData.getInfoDeposit();
// appData.calcSavedMoney();
