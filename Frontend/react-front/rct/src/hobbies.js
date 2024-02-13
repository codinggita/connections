import React, { useState, useEffect } from 'react';
import Navbar3 from './Navbar3';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Hob1 from './signup/hob1.png';
import Hob2 from './signup/hob2.png';

export default function Hobbies() {
  const navigate = useNavigate();

  const [isSubmitEnabled, setSubmitEnabled] = useState(true); // Set to true initially
  const [formInputs, setFormInputs] = useState({
    interest: '',
    info: '',
  });

  useEffect(() => {
    // No check for empty fields, always enable the submit button
    setSubmitEnabled(true);
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
    try {
      const response = await Axios.post('http://localhost:8000/hobbies', formInputs);

      // Check the response status and handle accordingly
      if (response.status === 201) {
        // Success: You may want to redirect or show a success message
        console.log('Data Saved successfully');
        console.log('User Data:', formInputs); // Display user data in console
        navigate('/pic'); // Redirect to the next page using useNavigate
      } else {
        // Error: Handle the error response
        console.error('Error creating user:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(217deg, rgba(189,20,20,1) 0%, rgba(251,204,204,1) 100%)',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Navbar3 />
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70, fontSize: 40, fontFamily: 'initial' }}>
        Please fill in the following details
      </p>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="interest"
            label="Interest/Hobbies"
            multiline
            maxRows={2}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur('interest', formInputs.interest)}
          />
          <br />
          <TextField
            style={{ marginTop: 30 }}
            id="info"
            label="A little about yourself"
            multiline
            maxRows={3}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur('info', formInputs.info)}
          />
        </div>
      </Box>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Button
          component={Link}
          to="/pic"
          color="inherit"
          sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2, '&:hover': { bgcolor: '#bd1414' } }}
          disabled={!isSubmitEnabled}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>

      <img src={Hob1} alt="jpg" style={{ position: 'absolute', top: '18.56vh', left: 100, height: '80vh' }} />
      <img src={Hob2} alt="jpg" style={{ position: 'absolute', top: '18.56vh', right: 40, height: '80vh' }} />
    </div>
  );
}