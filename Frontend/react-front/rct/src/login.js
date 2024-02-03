import React from 'react'
import Navbar2 from './navbar2'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  Link } from "react-router-dom"
import Login1 from './login/login1.png'



function Login() {
  return (
    <div style={{
      height: '100vh', 
      width: '100vw', 
      background: 'linear-gradient(217deg, rgba(189,60,60,1) 0%, rgba(251,204,204,1) 100%)'
    }}>
        
      <Navbar2/>
      
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',marginTop: 75}}>
      <form style={{bgcolor:'black',background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,60,60,1) 100%)',
        borderRadius: '30px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)',
        position: 'relative',
        overflow: 'hidden',
        width: '768px',
        minHeight: '480px'}}>
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
          <Button color="inherit" sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2 ,'&:hover': {bgcolor:'#bd1414'}}}>
          <Link to="/myaccount" style={{ textDecoration: 'none', color: 'white' ,'&:hover': {color:'#000000'}}}>Submit</Link>
          </Button>
        </div>


      
        <p style={{display:'flex',justifyContent: 'center', alignItems:'center', fontSize:20}}>Don't have an  Account</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:0}}>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold','&:hover': {color:'#000000'}}}>
          <Link to="/signup" style={{ color: 'black' }}>Sign-Up</Link>
          </Button>
        </div>

        </form>
    </div>
    <img src={Login1} alt='jpg' style={{ position:'absolute',top: '10.56vh',left:40, height: '55vh' }} />
    </div>
    
  )
}

export default Login


/*
const Login = () => {
  const googleOAuthUrl = "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile";

    
                <span style={{marginTop: 25}}>Or continue with G-Mail</span>
                <a href={googleOAuthUrl} className="icon" target="_blank" rel="noopener noreferrer">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX////rRDVVfb8yqVPGJSf7vBJRer4rp099mcxnu3tpu33qOjb7vhHOLCr3oh5LdrwhpUi6yOOv2bnrQTHrPS3qNCHFHR/qOij2ubXRX2DwgXn8yVfqLxnCAAD7twD85uX61NH0oZv+9/bsTkBLgcbuamDLHhiztDMUqFZbebh4aZ2bUHThuR/+7MrDCw/7vyX94662N0h2rkXn7PX57OzotLTotbX/+e794abflpfJNTf93Jvag4PflZX92Y/81Hz+9eHsw8PVcHH8zmj+6cDOT1D8xUTILzG0dozKxGXtV0vbnSTpHgCYrtWIyJfj8ubJ1Oiu2bjB4cjnon0jAAAElUlEQVR4nO2caVfTQBhGk7ZQcaNAaRGbUitSXCgom6CigLui6P//MSbpwiSZrc2804znuZ85fc49czNpv+B5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwX3Bwfnh41DmwtHa8s/d6b+fY0lrIwclpEPT7/SA4PemSrx2/2W0P2D2zI9l9G/QrQxr94B3x3Fm7PTei3X5PvBbRaWxVWPqnG4RrH3Zv/AaOO4RrMUdBJUUjOCRb20v6xY57ZGsx5xnBkOCCaO0yKxgqfiRaizngCVYqW18oSk0XOlakvG8+NbiGJKVyCh3y2fjWGG6jRKVyCx0eIt1t80BwhOZLFRVKfIiCp3Bc6pqxpbX7dyWCdE/iUV9mWLnXWjc0tN5SGFJdp++25IZ+87GJUjceN+8oDM8MzPC4kDyGsaG/0spf6lprxVcZXhqw4SG7aAaGvp+71PVW+CkKw7mHRnyy6BjmLDUs1C+6Ya5So0KLb5ij1LhQFwynLHVYqBOGU5U6KtQNwylKHRfqiuGEpTKFOmM4Ualsoe4YTlBqolCXDDVLTRXqlKFWqelC3TLUKDVT6CwNv0p/AfMNFaVyCtUwbH8jMrz1rCE7Rb6htFReoUrD9tyrBSrDzacvJT+CBYaSUrmFKg1flKtkhvOlzefiUoWGglIFhaoMe9ukhqVNcaliQ26pokKlhmGh22Vaw5K4VIkhp1RhoVLDF+VQkNiwJCxVapgqVVKozLAX+dEbikqVGyZKlRUqNBwUasVQUKrCkClVWqjQcFCoHUN+qUrDYamKQkWGvZGfHUNeqWrDuFRVoQLDVzeCdgw5pWoY+v7q91WNv8oY3hRqzzBbqpahrz5AjmGP9bNnmC5Vz1CLhGE7UahVw1SpVIbJQu0aJkslMuyl/ewasqVSGGYLtW7IlEphmC3UvmFU6haVIafQWRiOSjVvyCt0JobDUk0b8gudjeHgTjVsKCh0VoZxqUYNRYXOzDAqVecbpx7NH1WJ4IwMS/O3Hmn8atBhpfVooSoRnJ2h16nXDQjW6x3vdkENve6T/KWuPul6xTX0vLylhoVGH1NgQ6/TzFNqvdnxim6Yq9S40MIbTl/qsFAHDKe8U6M71BXDqUodF+qE4eSlMoU6YjjhnTq6Q10ynKjURKHOGOqXmirUIUPNUtOFumSoVWqmUKcM1aVyCnXMUPH2Z9/yrhpKS+UW6pyhuFRBoRGOGQpKFRUa4Zoht1RhoRHOGWZLlRQa4aBh6u3Pe8uzuGiYKFVaaISThjelKgqNcNRweKfK7tARrhrGpSoLjXDWMCz1p7LQCIcNPb3/+OKyoR4wNDjFAkODUzA0OMUCQ4NTMDQ4xQJDg1MwNDjFAkODUzA0OMUCQ4NTCsPbBqdYrgpj+MvgFMvSYkEMa8sGpxIUxtDgUpIrmaI9wxpVpCElyZNozbBaNTiUZn9RrGjLsFr7bXAow35JGKolw1qZVDBkqbQowKThQk1AmewaZdi/XuJybXDj759lHn+pzw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzwD6Z5wW/7P+6JAAAAAElFTkSuQmCC"
                    alt="Gmail Logo" style={{borderRadius: '70%', width: '50px', paddingTop: '5px'}}
                  />
                </a>
*/