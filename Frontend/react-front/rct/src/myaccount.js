import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import { Link } from "react-router-dom"
import title from './chat/name.png'
import logo from './chat/logo.png'
import Acc1 from './account/acc1.png'
import Acc2 from './account/acc2.png'
import Acc3 from './account/acc3.png'


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    
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
            <Link to="/myaccount" style={{ textDecoration: 'none', color: 'black' }}><img src={title} style={{width:400, marginTop:7 }} alt='png'/></Link>
          </Typography>
          <IconButton
            aria-label="profile"
            aria-controls="profile-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" sx={{ bgcolor: '#424346' }} />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}><Link to="/myprofile" style={{ textDecoration: 'none', color: 'black' ,'&:hover': {color:'#000000'}}}>My account</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link to="/login" style={{ textDecoration: 'none', color: 'black' ,'&:hover': {color:'#000000'}}}>Logout</Link></MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>

      <div style={{ marginLeft: '5vh' }}>


        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '5vh', fontFamily: '-moz-initial' }}>
          <Avatar
            alt="Profile Picture"
            src="/path/to/profile-picture.jpg"
            sx={{ bgcolor: '#d36f6f', height: '8vh', width: '8vh', fontSize: '5vh' }}
          />
          <div style={{ marginLeft: '1vh' }}>
            <p style={{ marginTop: '1vh', fontSize: '24px' }}>myName</p>
            <p style={{ fontSize: '15px' }}>myOccupation</p>
          </div>
        </div>

        <p style={{ fontSize: 25, marginLeft: '5vh', fontFamily: '-moz-initial', fontWeight: 'bold' }}>NOTIFICATIONS</p>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '3vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Ram Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{background:'linear-gradient(162deg, rgba(150,66,66,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <p style={{ fontSize: '15px' }}>Has liked your profile</p>
      </div>
    </div>


    <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '1vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Sita Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{background:'linear-gradient(162deg, rgba(62,108,199,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <Link to="/match" style={{ fontSize:'15px',textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>Has sent a Match Request</Link>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '1vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Veer Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{ background:'linear-gradient(162deg, rgba(46,76,48,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <Link to="/quiz" style={{ fontSize:'15px',textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>Click to play Quiz</Link>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '1vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Priya Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{ background:'linear-gradient(162deg, rgba(254,214,0,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <Link to="/chat" style={{ fontSize:'15px',textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>Click to Chat</Link>
      </div>
    </div>


<div style={{height: '60vh', width: '50vh', backgroundColor: 'maroon', marginLeft:'90vh' ,top: '20vh', left: 50,  position: 'absolute'}}></div>

<img src={Acc1} alt='png' style={{top: '80vh', left: 660,  position: 'absolute',height: '20vh',}}/>
<img src={Acc2} alt='png' style={{top: '84vh', left: 930,  position: 'absolute',height: '12vh',}}/>
<img src={Acc3} alt='png' style={{top: '80vh', left: 720,  position: 'absolute',height: '20vh',}}/>
</div>
        

</div>

  );
};

export default Navbar;




