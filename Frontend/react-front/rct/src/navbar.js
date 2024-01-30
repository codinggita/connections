import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {BrowserRouter, Routes, Link} from "react-router-dom"

const drawerWidth = 240;
const navItems = ['Login', 'SignUp', 'About'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{bgcolor: '#fff'}}>
        <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}  />
        
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , color: '#0D0D0D', fontWeight: 'bold', fontFamily: '' }}
          >  <div id='text'>CONNECTIONS</div>
          </Typography>
        
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#171717', fontWeight: 'semi-bold' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

        
        <Toolbar />
          
      </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;  


