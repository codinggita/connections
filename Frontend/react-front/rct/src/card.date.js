import * as React from 'react';
import Container from '@mui/material/Container';
import Cardd from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Date1() {
  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Cardd sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#f38383'}}>
      <CardContent>
        <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
        Make the first move
        </Typography>
        <Typography sx={{textAlign: ' center', fontSize: 15, color: '#060000'}}>
        Start meeting new people around the world! If you already have an account, sign in to use Connection.
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
        <Button size="large" sx={{ bgcolor: '#b52e2e' , color: '#fff' }}>Join</Button>
        <Button size="large" sx={{ bgcolor: '#760000' , color: '#fff' }}>Sign-In</Button>
      </CardActions>
    </Cardd>
    </Container>
  );
  }