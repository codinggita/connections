import * as React from 'react';
import Navbar3 from './Navbar3'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

export default function Hobbies() {
  return (
    <div style={{
        background: 'radial-gradient(circle, rgba(246,119,119,1) 0%, rgba(241,172,91,1) 100%)',
        height: '100vh', // sets the height to 100% of the viewport height
        width: '100vw' // sets the width to 100% of the viewport width
      }}>
    <Navbar3/>
    <p style={{display: 'flex',justifyContent:'center', alignItems:'center', marginTop: 70, fontSize: 40, fontFamily:'initial',}}>Please fill in the following details</p>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },display:'flex', justifyContent:'center', alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-multiline-flexible"
          label="Interests / Hobbies"
          multiline
          maxRows={2}
        />
        <br/>
        <TextField style={{marginTop: 30}}
          required
          id="outlined-multiline-flexible"
          label="A little about yourself"
          multiline
          maxRows={3}
        />
        
      </div>
      
        
    </Box>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:20}}>
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {color:'#000000'}}}>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Next</Link>
          </Button>
        </div>

    </div>
    )
}




<TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />