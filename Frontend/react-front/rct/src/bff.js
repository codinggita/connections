import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './bff.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import fndSVG from './friends.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';


function BFF() {
  return (
    <div>
        <Navbar/>
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="xl" className='bg' sx={{paddingLeft: 0, height:'130vh'}}>
                    <Box sx={{ height: '100vh'}}>
                        <Container maxWidth="sm" >
                            <Typography sx={{ fontWeight: 'bold', fontSize: 100, color: '#fff', paddingTop: 5, textAlign: 'center' ,fontFamily: 'IM FELL Great Primer SC'}}>
                                Find<br /> Your <br /> People<br />
                            </Typography>
                            
                            <Typography sx={{fontWeight:'bold',fontFamily: 'IM FELL Great Primer SC', fontSize: 30, color: '#060000' ,textAlign:'center', paddingTop: 3}}>
                                With CONNECT For Friends
                            </Typography>
                        </Container>
                    </Box>
                </Container>


                <Container maxWidth="xlg" className='box-2' sx ={{width: '218.5vh', height:'130vh' }}>
        <Box sx={{ marginTop: '10vh'}}>
          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff'}}>
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







        </React.Fragment>
    <Footer />
    </div>
  );
}


export default BFF;



