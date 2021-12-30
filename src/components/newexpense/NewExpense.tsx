import { Expense } from '../expenses/ExpenseItem';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

interface NewExpenseProps {
  onAddExpense: (expense: Expense) => void;
}

export const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
