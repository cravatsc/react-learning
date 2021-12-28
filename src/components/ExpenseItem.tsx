import React from 'react';
import './ExpenseItem.css';

export interface Expense {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem: React.FC<Expense> = ({ title, date, amount }) => {
  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};
