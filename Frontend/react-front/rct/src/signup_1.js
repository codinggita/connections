import React from 'react'
import Navbar3 from './Navbar3'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Sign3 from './signup/sign3.png'
import Sign4 from './signup/sign4.png'

function SignUp1() {
    return (
      <div style={{background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,20,20,1) 100%)',
        height: '100vh', // sets the height to 100% of the viewport height
        width: '100vw' // sets the width to 100% of the viewport width
      }}>
    <Navbar3/>
    <p style={{display: 'flex',justifyContent:'center', alignItems:'center', marginTop: 70, fontSize: 40, fontFamily:'initial',}}>Please fill in the following details</p>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display:'flex', justifyContent:'center', alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{borderColor: 'black'}}>
        <TextField style={{marginTop: 30,}}
          required
          id="First Name"
          label="First Name"
        />
        <br/>
        <TextField style={{marginTop: 30}}
          required
          id="Last Name"
          label="Last Name"
        />
        </div>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:20}}>
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {bgcolor:'#bd1414'}}}>
          <Link to="/hobbies" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Next</Link>
          </Button>
        </div>
        <img src={Sign3} alt='jpg' style={{ position:'absolute',top: '18.56vh',left:150, height: '80vh' }} />
        <img src={Sign4} alt='jpg' style={{ position:'absolute',top: '18.56vh',right:150, height: '80vh' }} />
    </div>
    )
}

export default SignUp1



/*
style={{position: 'absolute',marginLeft: 170,
    width: '355.18px',
    height: '83.35px',
    left: '412px',
    top: '252px',
    background: 'black',
    borderRadius: '50px',}}>*/