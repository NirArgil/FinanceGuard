import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { LangContext } from '../context/LangContext';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { darkMode } = useSelector((state) => state.theme);

  const { currentLang } = useContext(LangContext);

  const { addTransaction } = useContext(GlobalContext);

  const { t } = useTranslation();

  const onSubmit = e => {
    e.preventDefault();


    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

    // function TxtandAmount() {
    //  document.getElementById("TxtandAmount").value=null;
    // }
    // TxtandAmount()
  }

  return (

    <div className={darkMode ? "addTransactionDarkMode" : "addTransaction"}>
      <div className={currentLang === 'עברית' ? 'HEBmode' : ''}>
        <h3>{t("add transaction")}</h3>
        <form onSubmit={onSubmit}>

          <div className="form-control">
            <label htmlFor="text">{t("text")}</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={t("placeholderText")} />
          </div>

          <div className="form-control">
            <label htmlFor="amount"> {t("amount")}
              <br />
              {t("help")}
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={t("placeholderAmount")} />
          </div>
          <button className="btn">{t("add transaction")}</button>
        </form>
      </div>
    </div>
  )
}