import { Card } from '../ui/Card';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export interface Expense {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem: React.FC<Expense> = ({ title, date, amount }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};
