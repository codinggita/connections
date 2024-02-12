import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from './navbar2';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleBlur = (id, value) => {
    // Log the data to the console when the input field loses focus
    console.log(`User input data - ${id}: ${value}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/login', formData);
  
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // Redirect to the desired page after successful login
        navigate('/myaccount');
      }
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.response?.data?.error || 'Internal Server Error');
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(217deg, rgba(189,60,60,1) 0%, rgba(251,204,204,1) 100%)',
    }}>
      <Navbar2 />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 75 }}>
        <form style={{
          bgcolor: 'black',
          background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,60,60,1) 100%)',
          borderRadius: '30px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          overflow: 'hidden',
          width: '768px',
          minHeight: '480px',
        }}>
          <h2 style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            fontSize: 40, fontFamily: 'unset', marginTop: 50,
          }}>Login to your Account</h2>

          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="email"
                label="Gmail-ID"
                onChange={handleChange}
                onBlur={() => handleBlur('email', formData.email)}
              />
              <br />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                onBlur={() => handleBlur('password', formData.password)}
              />
            </div>
          </Box>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Button color="inherit" sx={{
              bgcolor: '#980000', color: 'white', fontWeight: 'bold',
              mx: 2, '&:hover': { bgcolor: '#bd1414' },
            }} onClick={handleSubmit}>
              Submit
            </Button>
          </div>

          <p style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20,
          }}>Don't have an Account</p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
            <Button color="inherit" sx={{
              color: 'black', fontWeight: 'bold', '&:hover': { color: '#000000' },
            }}>
              <Link to="/signup" style={{ color: 'black' }}>Sign-Up</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


