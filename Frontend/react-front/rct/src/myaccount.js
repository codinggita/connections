import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

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

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>CONNECTIONS</Link>
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
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
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
            <p style={{ marginTop: '1vh', fontSize: '24px' }}>Name, Age</p>
            <p style={{ fontSize: '15px' }}>Occupation</p>
          </div>
        </div>

        <p style={{ fontSize: 25, marginLeft: '5vh', fontFamily: '-moz-initial', fontWeight: 'bold' }}>NOTIFICATIONS</p>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '3vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Profile Picture"
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
        alt="Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{background:'linear-gradient(162deg, rgba(62,108,199,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <p style={{ fontSize: '15px' }}>Has  sent a match request</p>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '1vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{ background:'linear-gradient(162deg, rgba(46,76,48,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <p style={{ fontSize: '15px' }}>Click to chat</p>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '5vh', marginTop: '1vh' ,fontFamily:'-moz-initial'}}>
      <Avatar
        alt="Profile Picture"
        src="/path/to/profile-picture.jpg"
        sx={{ background:'linear-gradient(162deg, rgba(254,214,0,1) 0%, rgba(255,255,255,0) 100%)', height: '6vh', width: '6vh', fontSize: '4vh' }}
      />
      <div style={{ marginLeft: '1vh' }}>
        <p style={{ marginTop: '1vh', fontSize: '24px' }}>Username</p>
        <p style={{ fontSize: '15px' }}>Click to Chat</p>
      </div>
    </div>



        {/* Maroon div */}
        <div style={{ height: '50vh', width: '50vh', backgroundColor: 'maroon', marginLeft: '5vh' }}></div>

</div>
    </div>
  );
};

export default Navbar;




