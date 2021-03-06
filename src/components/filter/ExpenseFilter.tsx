import { useState } from 'react';
import './ExpenseFilter.css';

interface ExpenseFilterProps {
  onChangeYear: (year: number) => void;
  selectedYear: number;
}

/**
 * remove all state from child component, state is controlled in the parent,
 * making the child component stateless or presentational component -
 * no internal state just there to output data
 **/
export const ExpenseFilter: React.FC<ExpenseFilterProps> = (props) => {
  const filterExpenseHandler = (event: any) => {
    props.onChangeYear(+event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterExpenseHandler} value={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
