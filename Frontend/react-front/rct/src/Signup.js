import React from 'react'
import Navbar3 from './Navbar3'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import SignUp1 from './signup_1';

function SignUp() {
  return (
    <div style={{
      background: 'radial-gradient(circle, rgba(246,119,119,1) 0%, rgba(241,172,91,1) 100%)',
      height: '100vh', // sets the height to 100% of the viewport height
      width: '100vw' // sets the width to 100% of the viewport width
    }}>
        
      <Navbar3/>
      <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 40, fontFamily: 'unset', marginTop:50}}>Signup into your Account</h2>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display:'flex', justifyContent:'center', alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="Gmail-ID"
          label="Gmail-ID"
        />
        <br/>
        <TextField
        required
          id="outlined-password-input"
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
        <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:10}}>
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {color:'#000000'}}}>
          <Link to= "/signup_1" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Submit</Link>
          </Button>
        </div>
        
        <p style={{display:'flex',justifyContent: 'center', alignItems:'center', fontSize:20}}>Already have an  Account</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:0}}>
          <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold','&:hover': {color:'#000000'}}}>
          <Link to="/login" style={{ color: 'white' }}>Login</Link>
          </Button>
        </div>


    </div>
    
  )
}

export default SignUp







