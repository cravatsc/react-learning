import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExpenseItem, Expense } from './components/expenses/ExpenseItem';
import { ExpenseList } from './components/expenses/ExpenseList';
import { NewExpense } from './components/newexpense/NewExpense';

const App1 = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.....
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const App = () => {
  const expenseArray: Expense[] = [
    {
      title: 'Monitor',
      amount: 475.15,
      date: new Date(2021, 11, 28),
    },
    {
      title: 'Keyboard',
      amount: 75,
      date: new Date(2021, 11, 27),
    },
  ];

  const [expenses, setExpenses] = useState<Array<Expense>>(expenseArray);

  const addExpenseHandler = (expense: Expense) => {
    //by passing data into this handler, we are "lifting state" up to the parent component
    //so that we can use it in other child components
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
