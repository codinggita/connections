import React from 'react'
import Navbar2 from './navbar2'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  Link } from "react-router-dom"


function Login() {
  return (
    <div style={{
        background: 'radial-gradient(circle, rgba(236,47,47,0.82) 0%, rgba(230,115,146,1) 50%, rgba(236,47,47,1) 100%)',
      height: '100vh', // sets the height to 100% of the viewport height
      width: '100vw' // sets the width to 100% of the viewport width
    }}>
        
      <Navbar2/>
      <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 40, fontFamily: 'unset', marginTop:50}}>Login to your Account</h2>
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
          id="outlined-Gmail-ID"
          label="Gmail-ID"
        />
        <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        
        </div>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:10}}>
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {color:'#000000'}}}>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Submit</Link>
          </Button>
        </div>


      
        <p style={{display:'flex',justifyContent: 'center', alignItems:'center', fontSize:20}}>Don't have an  Account</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:0}}>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold','&:hover': {color:'#000000'}}}>
          <Link to="/signup" style={{ color: 'black' }}>Sign-Up</Link>
          </Button>
        </div>

    </div>
    
  )
}

export default Login







