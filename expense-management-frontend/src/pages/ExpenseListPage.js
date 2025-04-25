import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../redux/expenseSlice';

const ExpenseListPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.expenses);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchExpenses());
  }, [status, dispatch]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Expenses</h1>
      <ul>
        {items.map(exp => (
          <li key={exp.id}>{exp.description} - ${exp.amount} on {exp.expenseDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseListPage;