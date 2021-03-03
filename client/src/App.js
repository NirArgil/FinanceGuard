import React, {useState} from 'react'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import { CalendarV } from './components/Calender/Calendar'
import { ChartV } from './components/Charts/Chart'

import './App.css'
import { AppContext } from './context/AppContext'

function App() {
  
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

    <GlobalProvider>
      <AppContext.Provider value={appContextValue}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
          <CalendarV />
          <ChartV />
        </div>
      </AppContext.Provider>
    </GlobalProvider>

  );
}

export default App;