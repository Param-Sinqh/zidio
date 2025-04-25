import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import expenseService from '../services/expenseService';

const initialState = { items: [], status: 'idle', error: null };

export const fetchExpenses = createAsyncThunk(
  'expenses/fetchAll',
  async (_, thunkAPI) => {
    const response = await expenseService.getExpenses();
    return response;
  }
);

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchExpenses.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default expenseSlice.reducer;
