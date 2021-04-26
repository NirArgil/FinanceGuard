import React, { useState } from 'react'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import { CalendarV } from './components/Calender/Calendar'
import { ChartV } from './components/Charts/Chart'

import { Footer } from './components/Footer'

import { useSelector } from "react-redux";

import LangContextProvider from './context/LangContext';

import './App.css'
import { AppContext } from './context/AppContext'

function App() {

  const { darkMode } = useSelector((state) => state.theme);

  const [tempIncome, setTempIncome] = useState(null);
  const [tempExpense, setTempExpense] = useState(null);

  const appContextValue = {
    tempExpense,
    setTempExpense,
    tempIncome,
    setTempIncome,
    IncomeExpenses,
  }
  return (
    <LangContextProvider>
      <GlobalProvider>
        <AppContext.Provider value={appContextValue}>
          <div className={darkMode ? "darkModeBody" : "lightModeBody"}>
            <Header />
            <div className="container" >
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
              <CalendarV />
              <ChartV />
            </div>
            <Footer />
          </div>
        </AppContext.Provider>

      </GlobalProvider>
    </LangContextProvider>
  );
}

export default App;