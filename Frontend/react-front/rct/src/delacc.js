import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './Navbar3';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Del(){
    return(
        <div>
            <Navbar/>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20vh'}}>
            <Card sx={{minHeight: 250, minWidth: 500, maxHeight: 400, maxWidth: 1000, bgcolor: '#ff1313', marginBottom: 2,marginRight:5,border:'2px' ,border: '2px solid red',boxShadow: '0 5px 15px rgba(0, 0, 0, 3)'}}>
        <CardContent>
          <Typography sx={{ textAlign: 'center', fontWeight: 'semi-bold', fontSize: 45, color: '#ffabab',fontFamily:'-moz-initial' }}>
           Your Account has been
          </Typography>
          <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 45, color: '#000' ,fontFamily:'-moz-initial'}}>
            DELETED
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button color="inherit" sx={{background: '#ffabab', fontWeight: 'bold', mx: 2, borderRadius:'50px',height:50,'&:hover': {bgcolor:'#fff'} }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' ,fontFamily:'-moz-initial'}}>RETURN TO HOME</Link>
          </Button>
        </CardActions>
      </Card>
      </div>

        </div>
    )
}