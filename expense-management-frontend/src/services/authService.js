import api from './api';

const login = async ({ username, password }) => {
  const { data } = await api.post('/auth/login', { username, password });
  localStorage.setItem('token', data.token);
  return data;
};

export default { login };