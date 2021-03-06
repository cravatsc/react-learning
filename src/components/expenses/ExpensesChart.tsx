import { Chart, DataPoint } from '../chart/Chart';
import { Expense } from './ExpenseItem';

interface ExpensesChartProps {
  expenses: Expense[];
}

export const ExpensesChart: React.FC<ExpensesChartProps> = (props) => {
  const chartDataPoints: DataPoint[] = [
    { value: 0, label: 'Jan' },
    { value: 0, label: 'Feb' },
    { value: 0, label: 'Mar' },
    { value: 0, label: 'Apr' },
    { value: 0, label: 'May' },
    { value: 0, label: 'Jun' },
    { value: 0, label: 'Jul' },
    { value: 0, label: 'Aug' },
    { value: 0, label: 'Sep' },
    { value: 0, label: 'Oct' },
    { value: 0, label: 'Nov' },
    { value: 0, label: 'Dec' },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount; //uses index of data pts
  }

  console.log(chartDataPoints);
  return <Chart data={chartDataPoints} />;
};
