import React from 'react';
import './ExpenseItem.css';

export interface Expense {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem: React.FC<Expense> = (expense) => {
  return (
    <div className="expense-item">
      <div>{expense.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
    </div>
  );
};
