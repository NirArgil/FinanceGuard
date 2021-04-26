import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { useTranslation } from "react-i18next";
import { GlobalContext } from '../context/GlobalState';
import { LangContext } from '../context/LangContext';
import { useSelector } from "react-redux";

export const TransactionList = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { transactions, getTransactions } = useContext(GlobalContext);
  const { t } = useTranslation();

  const { currentLang } = useContext(LangContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={darkMode ? "darkModeDivs" : ""}>

    <div className={currentLang === 'עברית' ? 'HEBmode' : ''}>
      <h3 >{t("history")}</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </div>

    </div>
  )
}