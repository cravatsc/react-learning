import { Card } from '../ui/Card';
import { ExpenseItem, Expense } from './ExpenseItem';
import './ExpenseList.css';

interface ExpensesProps {
  expenses: Expense[];
}

export const ExpenseList: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};
