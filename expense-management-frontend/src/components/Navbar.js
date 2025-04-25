import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/dashboard" style={{ marginRight: '1rem', color: '#fff' }}>Dashboard</Link>
      <Link to="/expenses" style={{ marginRight: '1rem', color: '#fff' }}>Expenses</Link>
      {token ? (
        <button onClick={handleLogout} style={{ background: 'red', color: '#fff' }}>Logout</button>
      ) : (
        <Link to="/login" style={{ color: '#fff' }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
