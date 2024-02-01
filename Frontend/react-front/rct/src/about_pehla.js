import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './about_pehla.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Footer from './footer';
import Navbar from './navbar';


function Appa() {
  return (
    <div>
      <Navbar/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='bgcol'>
      <div style={{position: 'absolute',
    left: '70.53%',
    right: '21.36%',
    top: '4.7%',
    bottom: '85.79%',
    background: 'linear-gradient(180deg, rgba(255, 0, 0, 0.93) 0%, rgba(255, 118, 118, 0.865) 21.6%, rgba(255, 255, 255, 0.79) 48.1%, rgba(234, 130, 130, 0.79) 60%, rgba(216, 21, 21, 0.79) 74.1%, #D81515 88.6%)',
}}>
      {/* Your component content goes here */}
    </div>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
    <Container maxWidth="sm"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <Card  sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#f08686'}}>
        <CardContent>
          <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
            Make the first move
          </Typography>
        </CardContent>
      </Card>
    </Container>
        </Box>
      </Container>



      <Container maxWidth="xlg" className='box-2' sx ={{width: '150vh' , marginLeft: '0'}}>
        <Box sx={{ marginTop: '20vh'}}>
          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className='card2' sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff'}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
            Why Connect Matters
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#060000'}}>
            Healthy relationships are central to living a positive, productive life. Connection is a social network that allows you to feel empowered while you make those connections, whether you’re dating or looking for friends. One first move on Connection could change your life.
          </Typography>
        </CardContent>
      </Card>
    </Container>
        </Box>
      </Container>



      <Container maxWidth="xlg" className='box-3' sx ={{width: '150vh' , marginRight: '0'}}>
        <Box sx={{ marginTop: '20vh'}}>
          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className='card1' sx={{ minHeight: 100, minWidth: 500, maxHeight: 400, maxWidth: 1000, bgcolor: '#ffffff' }}>
        <CardContent>
          <Typography sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: 45, color: '#060000' }}>
            The Connect Effect
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 15, color: '#060000' }}>
            We encourage integrity, kindness, equality, confidence, and respect during all stages of any relationship — whether online or offline. Bumble is where people go to learn how to establish and maintain healthier connections.
          </Typography>
        </CardContent>
      </Card>
    </Container>
        </Box>
      </Container>
    </React.Fragment>
    <Footer />
    </div>
  );
}
export default Appa;