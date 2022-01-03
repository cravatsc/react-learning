import { useState } from 'react';
import { Card } from '../ui/Card';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export interface Expense {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem: React.FC<Expense> = ({ title, date, amount }) => {
  //use state returns the value of title and a function to change the val
  //best naming convention for using state and deconstructed props
  const [titleState, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{titleState}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};
