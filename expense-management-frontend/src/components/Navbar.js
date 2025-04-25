// src/components/Navbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Expense Manager
        </Typography>
        <Link component={RouterLink} to="/dashboard" color="inherit" sx={{ mr: 2 }}>
          Dashboard
        </Link>
        <Link component={RouterLink} to="/expenses" color="inherit" sx={{ mr: 2 }}>
          Expenses
        </Link>
        {token ? (
          <Button color="secondary" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button component={RouterLink} to="/login" color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
