import api from './api';

const getExpenses = async () => {
  const { data } = await api.get('/expenses');
  return data;
};

export default { getExpenses };