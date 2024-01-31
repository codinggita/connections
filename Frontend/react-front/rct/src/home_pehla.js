import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './home_pehla.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';


export default function SimpleContainer() {
  return (
    <div>
      <Navbar/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='gradient_background'>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card sx={{ minHeight: 250, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#f4d0d0'}}>
      <CardContent>
        <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
        Make the first move
        </Typography>
        <Typography sx={{textAlign: ' center', fontWeight: 'semi-bold', fontSize: 30 , color: '#060000'}}>
        Start something Epic
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button color="inherit" sx={{ bgcolor: '#bf5f5f' ,color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Create Account</Link></Button>
      </CardActions>
    </Card>
    </Container>
        </Box>
        
      </Container>

    </React.Fragment>
    <Footer />
    </div>
  );
}


// <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontWeight: 'bolder', fontSize: 50 }}>We’re not just for dating </p>