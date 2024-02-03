import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import { Link } from "react-router-dom"
import title from './chat/name.png'
import logo from './chat/logo.png'   

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
                <div style={{ marginTop: '15vh', height: '70vh', width: '50vh', backgroundColor: 'maroon', marginLeft: '50vh' }}>
  <p style={{ fontSize: '4vh', marginLeft: '55vh', fontFamily: '-moz-initial' }}>Name, Age</p>
</div>
<p style={{ fontSize: '2vh', marginLeft: 155, marginRight: 45, fontFamily: '-moz-initial' , padding:0}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
               </div>
                
    );
};