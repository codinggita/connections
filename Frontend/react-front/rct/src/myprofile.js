import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import { Link } from "react-router-dom"
import title from './chat/name.png'
import logo from './chat/logo.png'
import Carousel from './carousel';
import Button from '@mui/material/Button';
 

export default function Profile(){
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'white',
            height: '100vh',
          }}>

            <AppBar position="static" sx={{ bgcolor: 'white' }}>
              <Toolbar>
                <img src={logo} style={{height: 50}} alt='png'/>
        
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>
                  <Link to="/myaccount" style={{ textDecoration: 'none', color: 'black' }}><img src={title} style={{width:400, marginTop:7}}  alt='png'/></Link>
                </Typography>
                </Toolbar>
                </AppBar>
               
  <p style={{top:'15vh',marginTop: '15vh',width: '50vh', fontSize: '4vh', marginLeft: '105vh', fontFamily: '-moz-initial',position:'absolute' }}>myName</p>

<p style={{ fontSize: '2vh',top:'40vh',left:'105vh',right:'55vh', fontFamily: '-moz-initial',position:'absolute'}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<Carousel/>
<div style={{display:'flex', justifyContent:'center',alignContent:'center', marginTop:10}}>
<Button color="inherit" sx={{width:'15vh',background: 'linear-gradient(217deg, rgba(242,0,0,1) 0%, rgba(245,75,75,1) 17%, rgba(242,0,0,1) 34%,rgba(245,75,75,1) 50%, rgba(242,0,0,1) 67%, rgba(245,75,75,1) 84%, rgba(242,0,0,1) 100%)', color: 'white', fontWeight: 'bold', mx: 2, borderRadius:'10px',height:50 }}>
  <Link to="/login" style={{ textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>Logout</Link>
</Button>
<Button color="inherit" sx={{width:'15vh',background: 'linear-gradient(217deg, rgba(242,0,0,1) 0%, rgba(245,75,75,1) 17%, rgba(242,0,0,1) 34%,rgba(245,75,75,1) 50%, rgba(242,0,0,1) 67%, rgba(245,75,75,1) 84%, rgba(242,0,0,1) 100%)', color: 'white', fontWeight: 'bold', mx: 2, borderRadius:'10px',height:50 }}>
  <Link to="/update" style={{ textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>Update Password</Link>
</Button>
<Button color="inherit" sx={{width:'15vh',background: 'linear-gradient(217deg, rgba(242,0,0,1) 0%, rgba(245,75,75,1) 17%, rgba(242,0,0,1) 34%,rgba(245,75,75,1) 50%, rgba(242,0,0,1) 67%, rgba(245,75,75,1) 84%, rgba(242,0,0,1) 100%)', color: 'white', fontWeight: 'bold', mx: 2, borderRadius:'10px',height:50 }}>
  <Link to="/sure" style={{ textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>Delete</Link>
</Button>
</div>

               </div>
                
    );
};


