import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import Bff1 from './bff/bff1.png';
import Bff2 from './bff/bff2.png';
import Bff3 from './bff/bff3.png';
import Bff4 from './bff/bff4.png';
import Bff5 from './bff/bff5.png';
import Bff6 from './bff/bff6.png';
import Bff7 from './bff/bff7.png';
import Bff8 from './bff/bff8.png';
import Bff9 from './bff/bff9.png';
import './bff.css'

function BFF() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({ email: '', firstName: '', lastName: '' });
  const navigate = useNavigate();

  const handleSubscription = async () => {
    try {
      const response = await axios.post('http://localhost:8000/bff', {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      });

      if (response.status === 201) {
        setIsFormSubmitted(true);
        console.log('Subscription successful');
        navigate('/subscription'); // Navigate to the subscription page
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error('Internal Server Error:', error); // Log the actual error
    }
    
  };

  return (
    <div>
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="bg-3" sx={{ paddingLeft: 0, height: '100vh' }}>
          <img src={Bff1} alt="jpg" style={{ position: 'absolute', top: 130, left: 50, height: '70vh' }} />

          <Box sx={{ height: '100vh' }}>
            <Container maxWidth="sm">
              <Typography sx={{ fontWeight: 'bold', fontSize: 100, color: '#fff', paddingTop: 5, textAlign: 'center', fontFamily: 'IM FELL Great Primer SC' }}>
                Find<br /> Your <br /> People<br />
              </Typography>

              <Typography sx={{ fontWeight: 'bold', fontFamily: 'IM FELL Great Primer SC', fontSize: 30, color: '#060000', textAlign: 'center', paddingTop: 3 }}>
                With CONNECT For Friends
              </Typography>
            </Container>
          </Box>
          <img src={Bff3} alt="jpg" style={{ position: 'absolute', top: 90, right: 80, height: '90vh' }} />
          <img src={Bff2} alt="jpg" style={{ position: 'absolute', top: 90, right: 80, height: '25vh' }} />
        </Container>

        <Container maxWidth="xlg" className="box-2" sx={{ width: '218.5vh', height: '180vh' }}>
          <Box sx={{ marginTop: '10vh' }}>
            <Container maxWidth="sm" style={{ height: '100vh' }}>
              <p style={{ fontFamily: '-moz-initial', fontSize: 50, fontWeight: 'bold', top: '120vh', right: 950, textAlign: 'left', position: 'absolute' }}>THERE ARE FRIENDS</p>
              <p style={{ fontFamily: '-moz-initial', fontSize: 50, fontWeight: 'bold', top: '130vh', right: 1050, textAlign: 'left', position: 'absolute' }}>FOR EVERY ERA.</p>
              <img src={Bff9} alt="jpg" style={{ position: 'absolute', top: 850, right: 3, height: '40vh' }} />
              <img src={Bff4} alt="jpg" style={{ position: 'absolute', top: 1125, right: 190, height: '10vh' }} />
              <img src={Bff8} alt="jpg" style={{ position: 'absolute', top: 1110, left: 210, height: '60vh' }} />
              <img src={Bff5} alt="jpg" style={{ position: 'absolute', top: 1425, right: 470, height: '10vh' }} />
              <p style={{ fontWeight: 'bold', fontFamily: '-moz-initial', fontSize: 30, top: '260vh', right: 1150, textAlign: 'left', position: 'absolute' }}>Even your messy ones.</p>
              <p style={{ fontFamily: '-moz-initial', fontSize: 20, textAlign: 'left', top: '270vh', right: 950, left: 80, position: 'absolute' }}>Bumble For Friends is about exactly that, friends. Whether you moved to a new city, found a new hobby, or just want a new person to talk to—Bumble For Friends is about finding your kinda people.</p>
              <img src={Bff7} alt="jpg" style={{ position: 'absolute', top: '220vh', right: 70, height: '60vh' }} />
              <img src={Bff6} alt="jpg" style={{ position: 'absolute', top: '285vh', right: 250, height: '10vh' }} />
            </Container>
          </Box>
        </Container>

        <Container maxWidth="xlg" sx={{ width: '218.5vh', height: '80vh', bgcolor: '#d57b7b', marginTop: 10 }}>
          <Container maxWidth="sm" style={{ height: '100vh' }}>
            <p style={{ fontFamily: '-moz-initial', fontSize: 40, fontWeight: 'bold', width: 800, top: '315vh', left: 50, textAlign: 'left', position: 'absolute' }}>Subscribe to Connect For Friends Emails</p>
            <p style={{ fontFamily: '-moz-initial', fontSize: 25, top: '330vh', left: 50, right: 800, textAlign: 'left', position: 'absolute' }}>We’d love to keep in touch to let you know about product updates, inspiring friendship tips & tricks, events, and special offers. Sign up if you’re happy to hear from us.</p>

            {isFormSubmitted ? (
              <div>
                <p style={{ textAlign: 'left', position: 'absolute', fontFamily: '-moz-initial', fontSize: 20, top: '400vh' }}>Thank you for subscribing! You can now access the linked page.</p>
                <Button
                  onClick={() => navigate('/subscription')}
                  style={{ textDecoration: 'none', color: 'white', position: 'absolute', top: '430vh', left: 50, fontSize: 20 }}
                >
                  Go to Subscription Page
                </Button>
              </div>
            ) : (
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'right', alignItems: 'right'
                }}
                noValidate
                autoComplete="off"
              >
                <div style={{ top: '330vh', left: 1050, textAlign: 'left', position: 'absolute' }}>
                  <TextField
                    required
                    id="Gmail-ID"
                    label="Gmail-ID"
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                  <br />
                  <div style={{ borderColor: 'black' }}>
                    <TextField style={{ marginTop: 10, }}
                      required
                      id="First Name"
                      label="First Name"
                      onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                    />
                    <br />
                    <TextField style={{ marginTop: 10 }}
                      required
                      id="Last Name"
                      label="Last Name"
                      onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <Button onClick={handleSubscription} color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2, '&:hover': { bgcolor: '#bd1414' } }}>
                      Submit
                    </Button>
                  </div>
                </div>
              </Box>
            )}
          </Container>
        </Container>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default BFF;
