import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../redux/expenseSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ExpenseListPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.expenses);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchExpenses());
  }, [status, dispatch]);

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>Expenses</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((exp) => (
              <TableRow key={exp.id}>
                <TableCell>{exp.description}</TableCell>
                <TableCell>${exp.amount.toFixed(2)}</TableCell>
                <TableCell>{exp.category}</TableCell>
                <TableCell>{exp.expenseDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseListPage;
