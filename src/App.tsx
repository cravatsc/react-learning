import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExpenseItem, Expense } from './components/expenses/ExpenseItem';
import { Expenses } from './components/expenses/Expenses';
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
    {
      title: 'Desk',
      amount: 215.99,
      date: new Date(2022, 0, 2),
    },
    {
      title: 'Mouse',
      amount: 25.25,
      date: new Date(2022, 0, 3),
    },
  ];

  const [expenses, setExpenses] = useState<Array<Expense>>(expenseArray);

  const addExpenseHandler = (expense: Expense) => {
    //by passing data into this handler, we are "lifting state" up to the parent component
    //so that we can use it in other child components
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setAddExpense((prevAddExpense) => !prevAddExpense);
  };

  const [addExpense, setAddExpense] = useState<boolean>(false);

  const changeExpenseScreen = () => {
    setAddExpense((prevAddExpense) => !prevAddExpense);
  };

  return (
    <div className="App">
      {addExpense ? (
        <NewExpense
          onAddExpense={addExpenseHandler}
          cancelAddExpense={changeExpenseScreen}
        />
      ) : (
        <button onClick={changeExpenseScreen}>Add New Expense</button>
      )}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
