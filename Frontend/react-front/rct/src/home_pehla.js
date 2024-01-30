import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicCard from './card';  // Import the BasicCard component
import './home_pehla.css';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='gradient_background'>
        <Box sx={{ height: '100vh', padding: '0vh' }}>
          {/* Include the BasicCard component */}
          <BasicCard />
        </Box>
        
      </Container>

    </React.Fragment>
  );
}


// <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontWeight: 'bolder', fontSize: 50 }}>We’re not just for dating </p>