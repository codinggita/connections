import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './date_pehla.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import Date1 from './date/date1.png'
import Date2 from './date/date2.png'
import Date3 from './date/date3.png'
import Date4 from './date/date4.png'


function Date() {
  return (
    <div>
      <Navbar/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='gradient'>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={Date1} alt='jpg' style={{ position: 'absolute', bottom:170, right: 900, height: '60vh' }} />
    <Card sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#f38383',marginRight:10}}>
      <CardContent>
        <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
        Make the first move
        </Typography>
        <Typography sx={{textAlign: ' center', fontSize: 15, color: '#060000'}}>
        Start meeting new people around the world! If you already have an account, sign in to use Connection.
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
      <Button sx={{ bgcolor: '#b52e2e' , mx: 2 , '&:hover': {bgcolor:'#3d0000'}}}><Link to="/login" style={{ textDecoration: 'none',color: 'white' }}>Join</Link></Button>
      <Button sx={{ bgcolor: '#760000' , mx: 2, '&:hover': {bgcolor:'#3d0000'}}}><Link to="/signup" style={{ textDecoration: 'none',color: 'white' }}>Sign-In</Link></Button>
      </CardActions>
    </Card>
    <img src={Date2} alt='jpg' style={{ position: 'absolute', top:355, right: 10, height: '60vh' }} />
    </Container>
        </Box>
      </Container>



      <Container maxWidth="xlg" className='dabba-2' sx ={{width: '150vh' , marginLeft: '0'}}>
        <Box sx={{ marginTop: '10vh'}}>
          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={Date3} alt='jpg' style={{ position: 'absolute', top:855, right: 790, height: '95vh' }} />
      <Card sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#6f1212',marginLeft:'155vh'}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#fff'}}>
          How it Starts
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#fff'}}>
          There’s no equality without respect, and that’s where all healthy relationships start. Two people match with each other first and then any of the two people can send a text to each other and start a conversation.
          </Typography>
        </CardContent>
      </Card>
      <img src={Date2} alt='jpg' style={{ position: 'absolute', top:355, right: 10, height: '60vh' }} />
      </Container>
        </Box>
      </Container>


      <Container maxWidth="xlg" className='dabba-3' sx ={{width: '150vh' , marginRight: '0'}}>
        <Box sx={{ marginTop: '10vh'}}>
          {/* Include the BasicCard component */}
          <div idName='svg'></div>
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={Date4} alt='jpg' style={{ top: '230.56vh',right:50, height: '100vh' }} />
      <Card sx={{  position: 'absolute',minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#c16f6f',marginRight:130}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#fff'}}>
          The Connect Effect
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#fff'}}>
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


export default Date;