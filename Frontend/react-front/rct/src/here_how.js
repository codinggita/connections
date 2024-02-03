import React from 'react';
import Typography from '@mui/material/Typography';
import Footer from './footer';
import Navbar from './navbar';
import Boy from './how/how1.png'
import Girl from './how/how2.png'
import How3 from './how/how3.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function How() {
  return (
    <div style={{background: 'white'}}>
        <Navbar/>
        <Typography sx={{marginTop:5, fontSize: 70 ,fontFamily: '-moz-initial', marginLeft: 37}}>
            Connect<img src={How3} style={{height:'10vh'}} alt='png'/>
        </Typography>
        <Typography sx={{fontSize: 30 ,fontFamily: '-moz-initial', marginLeft: 62}}>
        The Best Intro Lines to<br/> Use on Bumble — Because <br/>You’re Better Than ‘Hey’
        </Typography>


        <p style={{marginLeft: 50, marginRight:50, marginTop:50,fontFamily: '-moz-initial', fontSize: 20}}>
        You know that slight flush and those positive vibrations you feel when the “You Matched!” screen appears when you’re Connecting? Whether you’ve been using Connections for a couple years or a couple of days, that sensation never really goes away. And while the match is the critical first step to possibly making a meaningful connection, it’s what comes next — your ice-breaking introduction line — that can make all the difference.
        </p>

        <img src={Boy} style={{top: '45vh', left: 50, textAlign: 'left', position: 'absolute', marginLeft: '15vh'}} alt='png'/>
        <img src={Girl} alt='jpg' style={{ marginTop: '3vh', marginLeft: '105vh',  height: '100vh', marginRight:'15vh' }} />


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 250, height: 80, borderRadius: '50px',backgroundColor: 'maroon', marginLeft: 50, marginTop: 50 }}>
          <p style={{ fontSize:40, color: 'white'}}>Empathetic</p>
        </div>
        <div style={{ marginLeft: 150, marginRight:90,fontFamily: '-moz-initial',fontSize: 20}}>
        <p style={{color: 'black'}}>Kindness comes naturally to you–not only do you consider other people’s feelings, but you prioritize them. To showcase this, try opening with a cute compliment, or asking a question that allows your match to open up.</p>
        <p style={{color: '#8a0101'}}>Love your taste in music. What’s the best concert you’ve ever been to?</p>
        <p style={{color: '#006c16'}}>Ooh super cool pics. Are you into photography?</p>
        <p style={{color: '#7b006f'}}>Hi! How are you *really* doing right now?</p>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 250, height: 80,borderRadius: '50px', backgroundColor: 'maroon', marginLeft: 50 , marginTop: 50}}>
          <p style={{ fontSize:40, color: 'white',fontFamily: '-moz-initial'}}>Confident</p>
        </div>
        <div style={{ marginLeft: 150, marginRight:90,fontFamily: '-moz-initial',fontSize: 20}}>
        <p style={{color: 'black'}}>Your success derives from asking for what you want and not wasting anyone’s time (we love a trailblazer). Stick to these roots by telling your match what it is about them that caught your eye.</p>
        <p style={{color: '#8a0101'}}>Your dog is so cute! Hopefully he’ll make an appearance on our first date? 😉</p>
        <p style={{color: '#006c16'}}>Lol your bio had me on the floor. Wanna link up sometime and tell each other dad jokes?</p>
        <p style={{color: '#7b006f'}}>Not gonna lie– you are SO my type. Your smile ?</p>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 250, height: 80, borderRadius: '50px',backgroundColor: 'maroon', marginLeft: 50 , marginTop: 50}}>
          <p style={{ fontSize:40, color: 'white',fontFamily: '-moz-initial'}}>Humorous</p>
        </div>
        <div style={{ marginLeft: 150, marginRight:90,fontFamily: 'IM FELL Great Primer SC',fontSize: 20}}>
        <p style={{color: 'black'}}>The best way to win someone’s heart? Make them laugh! Luckily, your wit just so happens to be your greatest strength. Put your best foot forward by keeping things light-hearted, and don’t be afraid to get corny!</p>
        <p style={{color: '#8a0101'}}>Are you my appendix? Because you give me this weird tingly feeling and I kinda want to take you out.</p>
        <p style={{color: '#006c16'}}>I know we’re all sick of being quarantined, but I’m trying to LOCKDOWN someone like you.</p>
        <p style={{color: '#7b006f'}}>Alright, I’m here. What are your two other wishes?</p>
        </div>
        <p style={{ marginLeft: 150, marginRight:90,fontFamily: '-moz-initial',fontSize: 20,color: 'black', marginTop: 80}}>Above all, remember that regardless of how carefully crafted your first message may be, some people still may not respond. Dating takes effort from both parties, and no matter how many tries it takes, you deserve the type of relationship you want!</p>
        

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50}}>
          <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold', fontSize:25}}>
          <Link to="/" style={{ color: 'black' }}>Back to home 🏠</Link>
          </Button>
        </div>

         <Footer />
    </div>

  );
}

export default How;











