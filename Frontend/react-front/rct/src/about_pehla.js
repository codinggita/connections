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
import Star from './about/star1.png'
import About1 from './about/about1.png'
import About2 from './about/about2.png'
import About3 from './about/about3.png'
import About4 from './about/about4.png'
import About5 from './about/about5.png'

//
function Appa() {
  return (
    <div>
      <Navbar/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='bgcol'>

        <Box sx={{ height: '95vh', padding: '0vh' }}>
    <Container maxWidth="sm"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={About1} alt='jpg' style={{ position: 'absolute', top:100, left: 80, height: '60vh' }} />
    <img src={About2} alt='jpg' style={{ position: 'absolute', top: 320,right:10, height: '60vh' }} />
    <img src={Star} alt='jpg' style={{ position: 'absolute', top:160, right: 418, height: '30vh' }} />
    <img src={Star} alt='jpg' style={{ position: 'absolute', bottom:12, left:418, height: '30vh' }} />
    
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
          <img src={About3} alt='jpg' style={{ position: 'absolute', top: 950,right:800, height: '80vh' }} />
      <Card className='card2' sx={{ minHeight: 100, minWidth: 600 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff',marginLeft:130}}>
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

          <img src={About5} alt='jpg' style={{ position: 'absolute', top: '265.56vh',right:230, height: '80vh' }} />
          <img src={About4} alt='jpg' style={{ position: 'absolute', top:'265.8vh',right:90, height: '80vh' }} />
      <Card className='card1' sx={{ minHeight: 100, minWidth: 500, maxHeight: 400, maxWidth: 1000, bgcolor: '#ffffff' ,marginRight:130}}>
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