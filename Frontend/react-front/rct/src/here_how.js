import React from 'react';
import Typography from '@mui/material/Typography';
import Footer from './footer';
import Navbar from './navbar';
import boySVG from './boy_how.svg';
import girlSVG from './girl_how.svg';
//import wedding from "./about_1.svg"
function How() {
  return (
    <div>
        <Navbar/>
        <Typography sx={{marginTop:5, fontSize: 70 ,fontFamily: 'Open Sans', marginLeft: 37}}>
            Connect
        </Typography>
        <Typography sx={{fontSize: 30 ,fontFamily: 'Open Sans', marginLeft: 62}}>
        The Best Intro Lines to<br/> Use on Bumble — Because <br/>You’re Better Than ‘Hey’
        </Typography>
        <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',width: '100%', // Set the width to fill the container
    height: 'auto', // Maintain the aspect ratio
    border: 'none'}}>
        <img src={boySVG} alt="svg" />
        <img src={girlSVG} alt="svg" />
        </div>
      <Footer />
    </div>

  );
}

export default How;
