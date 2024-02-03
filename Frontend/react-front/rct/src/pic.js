import React from 'react';
import './home_pehla.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar3'
import PP from './signup/pp.png'

const SimpleImageUploader = () => {
  
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
        <img src={PP} alt='jpg' style={{ position:'absolute',top: '40vh',right:40, height: '60vh' }} />
    </div>
  );
};

export default SimpleImageUploader;





