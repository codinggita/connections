import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter, Routes, Link } from "react-router-dom"

export default function Navbar2() {
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
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "bold", fontFamily: "Roboto" }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>CONNECTIONS</Link>
          </Typography>

          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>SignUp</Link></Button>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>Abouts</Link></Button>


        </Toolbar>
      </AppBar>
    </Box>
  );
}