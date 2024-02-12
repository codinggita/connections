import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Navbar from './Navbar3';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Sure() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');

  const handleYesButtonClick = () => {
    setShowInput(true);
  };

  const handleDeleteUser = async () => {
    try {
      // Make an HTTP DELETE request to your server endpoint for deleting the user
      const response = await axios.delete('http://localhost:8000/deleteUser', {
        data: { email: email } // Send the email in the request body
      });

      if (response.status === 200) {
        console.log('User deleted successfully:', response.data.deletedUser);
        // Redirect or perform any other action after successful deletion
      } else {
        console.error('Error deleting user:', response.data.error);
      }
    } catch (error) {
      console.error('Error deleting user:', error.response?.data?.error || 'Internal Server Error');
    }
  };

  return (
    <div style={{ background: 'linear-gradient(267deg, rgba(120,31,31,1) 0%, rgba(255,181,181,1) 30%, rgba(255,181,181,1) 60%, rgba(120,31,31,1) 100%)', minHeight: '100vh' }}>
      <Navbar />
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20vh' }}>
          <Card sx={{ minHeight: 250, minWidth: 500, maxHeight: 400, maxWidth: 1000, bgcolor: '#ff1313', marginBottom: 2, marginRight: 5, border: '2px solid red', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
            <CardContent>
              <Typography sx={{ textAlign: 'center', fontWeight: 'semi-bold', fontSize: 45, color: '#ffabab', fontFamily: '-moz-initial' }}>
                Are you sure you want to
              </Typography>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 45, color: '#000', fontFamily: '-moz-initial' }}>
                DELETE your account
              </Typography>
              {showInput && (
                <TextField
                  label="Enter Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {!showInput && (
                <>
                <Button color="inherit" sx={{ background: '#ffabab', fontWeight: 'bold', mx: 2, borderRadius: '50px', height: 50, '&:hover': { bgcolor: '#fff' }, width: 150 }}>
                 <Link to="/myprofile" style={{ textDecoration: 'none', color: 'black', fontFamily: '-moz-initial' }}>CANCEL</Link>
               </Button>
                <Button
                  color="inherit"
                  sx={{ background: '#ffabab', fontWeight: 'bold', mx: 2, borderRadius: '50px', height: 50, '&:hover': { bgcolor: '#fff' }, width: 150 }}
                  onClick={handleYesButtonClick} // Show input field on "YES" click
                >
                  <Link to="/deluser" style={{ textDecoration: 'none', color: 'black', fontFamily: '-moz-initial' }}>YES!</Link>
                </Button>
                </>
              )}
              {showInput && (
                <>
                  <Button
                    color="inherit"
                    sx={{ background: '#ffabab', fontWeight: 'bold', mx: 2, borderRadius: '50px', height: 50, '&:hover': { bgcolor: '#fff' }, width: 150 }}
                    onClick={() => setShowInput(false)} // Hide input field on "CANCEL" click
                  >
                    <Link to="/myprofile" style={{ textDecoration: 'none', color: 'black', fontFamily: '-moz-initial' }}>CANCEL</Link>
                  </Button>
                  <Button
                    color="inherit"
                    sx={{ background: '#ffabab', fontWeight: 'bold', mx: 2, borderRadius: '50px', height: 50, '&:hover': { bgcolor: '#fff' }, width: 150 }}
                    onClick={handleDeleteUser}
                  >
                    <Link to="/deluser" style={{ textDecoration: 'none', color: 'black', fontFamily: '-moz-initial' }}>CONFIRM</Link>
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        </div>
      </Container>
    </div>
  );
}

