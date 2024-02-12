import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom"
import title from './chat/name.png'
import logo from './chat/logo.png'

export default function Navbar3() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#fff", boxShadow: 10 }} className="AppBar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <img src={logo} style={{height: 50}} alt='png'/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>
            <Link to="/myaccount" style={{ textDecoration: 'none', color: 'black' }}><img src={title} style={{width:400, marginTop:7 }} alt='png'/></Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}