import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../redux/expenseSlice';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const total = items.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Total Expenses</Typography>
          <Typography variant="h4">${total.toFixed(2)}</Typography>
        </Paper>
      </Grid>
      {/* Future analytics cards here */}
    </Grid>
  );
};

export default DashboardPage;
