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

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYear={filterYearHandler}
      />
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={index} //w/o key, we are adding an expense to the end and then updating each items and updating the contents - with key we will not do this process. We could potentially lose state w/o key
        />
      ))}
    </Card>
  );
};
