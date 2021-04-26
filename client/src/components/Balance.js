import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AppContext } from '../context/AppContext'
import { LangContext } from '../context/LangContext';
import { useTranslation } from "react-i18next";

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

export const Balance = () => {
  const { changeCurrency, currentCurrency } = useContext(LangContext);

  const { t } = useTranslation();

  const context = useContext(AppContext);

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);


  const totalFunc = context.tempExpense > context.tempIncome ?
    "Minus " + MoneyFormatter(total) : MoneyFormatter(total);

  return (

    <AppContext.Provider>

      <div className="balanceDiv">
        <h4 > {t("balance")}</h4>
        <h1>{totalFunc}</h1>

      </div>
    </AppContext.Provider>
  )
}