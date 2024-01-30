import React from 'react'
import Navbar2 from './navbar2'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Login() {
  return (
    <div style={{
        backgroundColor: 'lavender',
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
        <ButtonGroup variant="outlined" aria-label="loading button group" sx={{display:'flex',justifyContent: 'center', alignItems:'center',margin:2}}>
        <Button>Submit</Button>
        </ButtonGroup>


      
        <p style={{display:'flex',justifyContent: 'center', alignItems:'center', fontSize:20}}>Don't have an  Account</p>
        <p style={{display:'flex',justifyContent: 'center', alignItems:'center', fontSize:20, textDecoration: 'underline',marginTop:0}}>Sign-Up</p>

    </div>
    
  )
}

export default Login







