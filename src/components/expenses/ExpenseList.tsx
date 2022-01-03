import { useState } from 'react';
import { ExpenseFilter } from '../filter/ExpenseFilter';
import { Card } from '../ui/Card';
import { ExpenseItem, Expense } from './ExpenseItem';
import './ExpenseList.css';

interface ExpensesProps {
  expenses: Expense[];
}

export const ExpenseList: React.FC<ExpensesProps> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<number>(2022);

  const filterYearHandler = (year: number) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeYear={filterYearHandler} />
      {expenses
        .filter((expense) => expense.date.getFullYear() === filteredYear)
        .map((expense, index) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={index}
          />
        ))}
    </Card>
  );
};
