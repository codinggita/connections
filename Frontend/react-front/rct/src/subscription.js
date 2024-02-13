import React from 'react';
import Navbar from './navbar'
import { CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Sub1 from './bff/sub1.png'
import Sub2 from './bff/sub2.png'
export default function Success(){
    return(
        <div>
        <Navbar/>
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="xl" sx={{display:'flex',justifyContent:'center',alignContent:'center',height:'89.3vh', bgcolor:'#D57B7B'}}>
                
                    <Box sx={{ height: '85vh', width:'100vh'}}>
                        <Container maxWidth="sm"  >
                            <Typography sx={{ fontSize: 50, color: '#000000', paddingTop: 5,fontFamily: 'IM FELL Great Primer SC', width :750, marginRight:10}}>
                            You have successfully Subscribed to
                            </Typography>
                            
                            <Typography sx={{fontWeight:'bold',fontFamily: 'IM FELL Great Primer SC', fontSize: 70, color: '#060000', paddingTop: 3}}>
                            CONNECT BFF<img src={Sub1} alt='jpg' style={{ position: 'absolute', top:235, left: 1000, height: '10vh' }} />
                            </Typography>

                            <Typography sx={{textAlign:'center', fontSize:20}}>
                            We’ll get back to you shortly...
                            </Typography>

                            <Typography sx={{textAlign:'center', fontSize:20, marginTop:10}}>
                            OKAY
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:5}}>
          <Button color="inherit" sx={{ color: 'black', fontWeight: 'bold', mx: 2 ,'&:hover': {bgcolor:'#bd1414'}}}>
          <Link to= "/bff" style={{ textDecoration: 'none', color: 'black' ,'&:hover': {color:'#000000'}}}>Back to Home</Link>
          </Button>
        </div>

        <img src={Sub2} alt='jpg' style={{ position: 'absolute', bottom:125, left: 720, height: '10vh' }} />
                        </Container>
                    </Box>

                </Container>
        </React.Fragment>
        </div>
    );
};
