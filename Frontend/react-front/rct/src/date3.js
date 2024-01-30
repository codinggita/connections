import * as React from 'react';
import Container from '@mui/material/Container';
import Date3 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Dat() {
    return (
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Date3 sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#c16f6f'}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#fff'}}>
          The Connect Effect
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#fff'}}>
          We encourage integrity, kindness, equality, confidence, and respect during all stages of any relationship — whether online or offline. Bumble is where people go to learn how to establish and maintain healthier connections.
          </Typography>
          
        </CardContent>
      </Date3>
      </Container>
    );
    }