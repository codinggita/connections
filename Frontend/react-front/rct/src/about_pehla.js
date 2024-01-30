import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import {AboutCard,About,Abou} from './card.about';  // Import the BasicCard component
import './about_pehla.css';
import About from './about2';
import AboutCard from './card.about'
import Abou from './about3';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='gradient_background'>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
          {/* Include the BasicCard component */}
          <AboutCard />
        </Box>
      </Container>


      <Container maxWidth="xlg" className='box-2' sx ={{width: '150vh' , marginLeft: '0'}}>
        <Box sx={{ marginTop: '20vh'}}>
          {/* Include the BasicCard component */}
          <About />
        </Box>
      </Container>


      <Container maxWidth="xlg" className='box-3' sx ={{width: '150vh' , marginRight: '0'}}>
        <Box sx={{ marginTop: '20vh'}}>
          {/* Include the BasicCard component */}
          <Abou />
        </Box>
      </Container>


    </React.Fragment>
  );
}