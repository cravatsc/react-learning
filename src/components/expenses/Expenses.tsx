import { useState } from 'react';
import { ExpenseFilter } from '../filter/ExpenseFilter';
import { Card } from '../ui/Card';
import { ExpenseItem, Expense } from './ExpenseItem';
import './Expenses.css';
import { ExpensesList } from './ExpensesList';

interface ExpensesProps {
  expenses: Expense[];
}

export const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<number>(2022);

  const filterYearHandler = (year: number) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  //can store jsx in a variable
  let expenseContent = <p>No Expenses found for {filteredYear}</p>;

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYear={filterYearHandler}
      />
      <ExpensesList filteredYear={filteredYear} expenses={filteredExpenses} />
    </Card>
  );
};
