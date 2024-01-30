import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function AboutCard() {
  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff'}}>
      <CardContent>
        <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
        Make the first move
        </Typography>
        
      </CardContent>
    </Card>
    </Container>
  );
  }