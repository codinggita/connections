import * as React from 'react';
import Container from '@mui/material/Container';
import About2 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function About() {
    return (
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <About2 sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff'}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
          Why Connect Matters
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#060000'}}>
          Healthy relationships are central to living a positive, productive life. Connection is a social network that allows you to feel empowered while you make those connections, whether you’re dating or looking for friends. One first move on Connection could change your life.
          </Typography>
          
        </CardContent>
      </About2>
      </Container>
    );
    }