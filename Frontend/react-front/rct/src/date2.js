import * as React from 'react';
import Container from '@mui/material/Container';
import Date2 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function date2() {
    return (
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Date2 sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#6f1212'}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#fff'}}>
          How it Starts
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#fff'}}>
          There’s no equality without respect, and that’s where all healthy relationships start. Two people match with each other first and then any of the two people can send a text to each other and start a conversation.
          </Typography>
          
        </CardContent>
      </Date2>
      </Container>
    );
    }