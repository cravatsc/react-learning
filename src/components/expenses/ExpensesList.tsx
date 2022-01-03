import { Expense, ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

interface ExpensesListProps {
  expenses: Expense[];
  filteredYear: number;
}

// extracting list to own component so we can return the proper tags based on conditionals
export const ExpensesList: React.FC<ExpensesListProps> = (props) => {
  if (props.expenses.length === 0) {
    return <p>No Expenses found for {props.filteredYear}</p>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={index} //w/o key, we are adding an expense to the end and then updating each items and updating the contents - with key we will not do this process. We could potentially lose state w/o key
        />
      ))}
    </ul>
  );
};
