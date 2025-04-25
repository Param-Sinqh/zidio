import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../redux/expenseSlice';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const total = items.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Total Expenses: ${total.toFixed(2)}</p>
    </div>
  );
};

export default DashboardPage;
