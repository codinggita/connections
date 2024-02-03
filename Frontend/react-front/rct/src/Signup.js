import React from 'react'
import Navbar3 from './Navbar3'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Sign1 from './signup/sign1.png'
import Sign2 from './signup/sign2.png'

function SignUp() {
  return (
    <div style={{
      height: '100vh', 
      width: '100vw', 
      background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,60,60,1) 100%)'
    }}>
        
      <Navbar3/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',marginTop: 75}}>
      <form style={{ bgcolor:'black',background: 'linear-gradient(217deg, rgba(189,60,60,1) 0%, rgba(251,204,204,1) 100%)',
        borderRadius: '30px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)',
        position: 'relative',
        overflow: 'hidden',
        width: '768px',
        minHeight: '480px'}}>
      <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 40, fontFamily: 'unset', marginTop:30}}>Signup into your Account</h2>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:5}}>
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {bgcolor:'#bd1414'}}}>
          <Link to= "/signup_1" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Submit</Link>
          </Button>
        </div>
        
        <p style={{display:'flex',justifyContent: 'center', alignItems:'center', fontSize:20,marginTop:3}}>Already have an  Account</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:0}}>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold',marginTop:0}}>
          <Link to="/login" style={{ color: 'black' }}>Login</Link>
          </Button>
        </div>
        
        </form>
        </div>

        <img src={Sign1} alt='jpg' style={{ position:'absolute',top: '5.56vh',left:5, height: '60vh' }} />
        <img src={Sign2} alt='jpg' style={{ position:'absolute',bottom: '0.56vh',left:1175, height: '60vh' }} />
    </div>
    
  )
}

export default SignUp







