import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './home_pehla.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './Navbar3'

const SimpleImageUploader = () => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected Image:', file);
    }
  };

  return (
    <div style={{
      height: '100vh', 
      width: '100vw', 
      background: 'linear-gradient(to right,#f0b69d, #ef7b7b)'
    }}>
      <Navbar/>
      <h1 style={{textAlign:'center', marginTop: 75, fontFamily:'-moz-initial', fontSize: 45, color:'#001844'}}>Select a Profile Picture</h1>
      <div style={{display:'flex',justifyContent:'center',alignContent:'center',height: '50vh' , width:'50vh', backgroundColor:'maroon',marginLeft: '85vh'}}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:20}}>
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {bgcolor:'#001844'}}}>
          <Link to="/myaccount" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Next</Link>
          </Button>
        </div>

    </div>
  );
};

export default SimpleImageUploader;






/*
<React.Fragment>
      <CssBaseline />
      <Container  className='gradient_background' sx={{minWidth: 1519}}>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ minHeight: 250, minWidth: 500 ,maxHeight: 400  ,maxWidth: 1000,  bgcolor: '#f4d0d0'}}>
              <CardContent>
                <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
                  Make the first move
                </Typography>
                <Typography sx={{textAlign: ' center', fontWeight: 'semi-bold', fontSize: 30 , color: '#060000'}}>
                  Start something Epic
                </Typography>
              </CardContent>
              <CardActions style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button color="inherit" sx={{ bgcolor: '#bf5f5f' ,color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Create Account</Link></Button>
              </CardActions>
            </Card>
          </Container>
        </Box>
      </Container>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <button>Choose Photo</button>
      </label>

      </React.Fragment>
      */