import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Date1 from './card.date';  // Import the BasicCard component
import './date_pehla.css';
import Date2 from './date2';
import Dat from './date3';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='gradient'>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
          {/* Include the BasicCard component */}
          <Date1 />
        </Box>
      </Container>


      <Container maxWidth="xlg" className='dabba-2' sx ={{width: '150vh' , marginLeft: '0'}}>
        <Box sx={{ marginTop: '10vh'}}>
          {/* Include the BasicCard component */}
          <Date2 />
        </Box>
      </Container>


      <Container maxWidth="xlg" className='dabba-3' sx ={{width: '150vh' , marginRight: '0'}}>
        <Box sx={{ marginTop: '10vh'}}>
          {/* Include the BasicCard component */}
          <Dat />
        </Box>
      </Container>


    </React.Fragment>
  );
}


