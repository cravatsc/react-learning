import { useState } from 'react';
import { Expense } from '../expenses/ExpenseItem';
import './ExpenseForm.css';

export const ExpenseForm: React.FC = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  //default to string because reading from the event is a string
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //alternative we can have three states, grouping together states
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  //when updating a state requiring previous state do the following isntead
  //rather than this
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });
  //do this to guarantee that the latest state's snapshot is used as the prev stat
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event: any) => {
    //event.target.value is always a string
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: any) => {
    //prevents the default submit activity which would submit the form to the server and reload the page - which is not what we want with SPA
    event.preventDefault();
    const expenseData: Expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
