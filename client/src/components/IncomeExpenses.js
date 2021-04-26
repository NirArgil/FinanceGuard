import React, { useContext, createContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AppContext } from '../context/AppContext';
import { LangContext } from '../context/LangContext';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

//Money formatter func
function MoneyFormatter(num) {
  const { currentCurrency } = useContext(LangContext);

  let p = num.toFixed(2).split('.');
  return (
    `${currentCurrency === 'ILS' ? '₪ ' : '$ '}` +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}


export const IncomeExpenses = () => {
  const { darkMode } = useSelector((state) => state.theme);

  const { t } = useTranslation();

  const { transactions } = useContext(GlobalContext);

  const context = useContext(AppContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  context.setTempExpense(expense);
  context.setTempIncome(income);

  return (
    <div className={darkMode ? "inc-exp-containerDarkMode" : "inc-exp-container"}> 

      <div>
        <h4>{t("income")}</h4>
        <p className="money plus">{MoneyFormatter(income)}</p>
      </div>
      <div>
        <h4>{t("expense")}</h4>
        <p className="money minus">{MoneyFormatter(expense)}</p>
      </div>
    </div>

  );
}



