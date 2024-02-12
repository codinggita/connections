import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar3 from './Navbar3';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Sign1 from './signup/sign1.png';
import Sign2 from './signup/sign2.png';

export default function SignUp() {
  const navigate = useNavigate();

  const [isSubmitEnabled, setSubmitEnabled] = useState(false);
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled to enable the submit button
    const { email, password, confirmPassword } = formInputs;
    const isValid = email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '';
    setSubmitEnabled(isValid);
  }, [formInputs]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
  };

  const handleInputBlur = (id, value) => {
    // Log the input when the user moves away from the text field
    console.log(`Input changed - ${id}: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formInputs;

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match");

      // Set error state
      setPasswordMismatchError(true);

      // Reset form inputs
      setFormInputs({
        email: '',
        password: '',
        confirmPassword: '',
      });

      // You might want to set an error state here and display a message to the user
      return;
    }

    try {
      const response = await Axios.post('http://localhost:8000/signup', formInputs);

      // Check the response status and handle accordingly
      if (response.status === 201) {
        // Success: You may want to redirect or show a success message
        console.log('User created successfully');
        navigate('/signup_1'); // Redirect to the next page using useNavigate
      } else {
        // Error: Handle the error response
        console.error('Error creating user:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,60,60,1) 100%)' }}>
      <Navbar3 />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 75 }}>
        <div style={{ background: 'linear-gradient(217deg, rgba(189,60,60,1) 0%, rgba(251,204,204,1) 100%)', borderRadius: '30px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)', position: 'relative', overflow: 'hidden', width: '768px', minHeight: '480px' }}>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 40, fontFamily: 'unset', marginTop: 30 }}>Signup into your Account</h2>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="email"
                label="Email-ID"
                value={formInputs.email}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("email", formInputs.email)}
              />
              <br />
              <TextField
                required
                id="password"
                label="New Password"
                type="password"
                autoComplete="current-password"
                value={formInputs.password}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("password", formInputs.password)}
              />
              <br />
              <TextField
                required
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                value={formInputs.confirmPassword}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("confirmPassword", formInputs.confirmPassword)}
              />
            </div>
          </Box>
          {passwordMismatchError && <p style={{ color: 'red' }}>Passwords do not match</p>}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            <Button type="submit" color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2, '&:hover': { bgcolor: '#bd1414' } }} disabled={!isSubmitEnabled} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20, marginTop: 3 }}>Already have an Account</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
            <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', marginTop: 0 }}>
              <Link to="/login" style={{ color: 'black' }}>Login</Link>
            </Button>
          </div>
        </div>
      </div>
      <img src={Sign1} alt='jpg' style={{ position: 'absolute', top: '5.56vh', left: 5, height: '60vh' }} />
      <img src={Sign2} alt='jpg' style={{ position: 'absolute', bottom: '0.56vh', left: 1175, height: '60vh' }} />
    </div>
  );
}
