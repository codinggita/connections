import React, { useState } from 'react';
import Navbar3 from './Navbar3';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';

function UpdatePWD() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const logUserInput = (fieldName, value) => {
    console.log(`${fieldName}:`, value);
  };

  const updatePassword = () => {
    axios.post('http://localhost:8000/updatepwd', {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    })
      .then(response => {
        // Handle the response from the server (success or error)
        setMessage(response.data.message);
      })
      .catch(error => {
        // Handle errors and display an alert
        console.error('Error:', error);
        alert('Password update failed. Please try again.');
      });
  };

  return (
    <>
      <div style={{ height: '100vh', background: 'linear-gradient(90deg, rgba(120,31,31,0.9) 0%, rgba(255,181,181,0.7954831590839461) 50%, rgba(120,31,31,0.9) 100%)' }}>
        <Navbar3 />

        <div className="App" >
          <h2 style={{ textAlign: 'center', fontSize: 50, fontFamily: 'initial', marginTop: '15vh' }}>Password Update</h2>
          <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontFamily: 'initial', fontWeight: 'bold' }} >
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              onBlur={() => logUserInput('Current Password', currentPassword)}
              required
            />
            <br />
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onBlur={() => logUserInput('New Password', newPassword)}
              required
            />
            <br />
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => logUserInput('Confirm Password', confirmPassword)}
              required
            />
            <br />
            <Button color="inherit" sx={{ width: '20vh', background: 'linear-gradient(217deg, rgba(242,0,0,1) 0%, rgba(245,75,75,1) 17%, rgba(242,0,0,1) 34%,rgba(245,75,75,1) 50%, rgba(242,0,0,1) 67%, rgba(245,75,75,1) 84%, rgba(242,0,0,1) 100%)', color: 'white', fontWeight: 'bold', mx: 2, borderRadius: '10px', height: 50 }}
              component={Link} to="/myprofile"
              onClick={updatePassword}
            >
              Update <br />Password
            </Button>
          </form>

          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default UpdatePWD;
