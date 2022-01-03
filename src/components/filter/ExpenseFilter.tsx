import { useState } from 'react';
import './ExpenseFilter.css';

interface ExpenseFilterProps {
  onChangeYear: (year: number) => void;
}

export const ExpenseFilter: React.FC<ExpenseFilterProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState<number>(2022);

  const filterExpenseHandler = (event: any) => {
    const year = +event.target.value;
    setFilteredYear(year);
    props.onChangeYear(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterExpenseHandler} value={filteredYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
