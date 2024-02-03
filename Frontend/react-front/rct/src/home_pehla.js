import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './home_pehla.css';
import pic from './chat/home.1.1.png'
import pic2 from './chat/home.1.2.png'
import pic3 from './chat/home.1.3.png'
import pic4 from './chat/home.2.1.png'
import pic5 from './chat/home.2.2.png'
import pic6 from './chat/home.2.3.png'
import pic7 from './chat/home.2.4.png'
import chat1 from './chat/chat1.png'
import chat2 from './chat/chat2.png'
import chat3 from './chat/chat3.png'
import chat4 from './chat/chat4.png'
import chat5 from './chat/chat5.png'
import chat6 from './chat/chat6.png'
import pic8 from './chat/home.3.1.png'
import pic9 from './chat/home.3.2.png'
import mid from './chat/mid.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Navbar from './navbar';

export default function SimpleContainer() {
  return (
    <div>
      <Navbar />
    <React.Fragment>
      <CssBaseline />
      <Container className='gradient_background' sx={{ minWidth: 1519 }}>
  <Box sx={{ height: '100vh', padding: '0vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="sm" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={pic2} alt='jpg' style={{ position: 'absolute', bottom:30, right: 580, height: '60vh' }} />
      <img src={pic3} alt='jpg' style={{ position: 'absolute', bottom:265, left: 460, height: '15vh' }} />
      <Card sx={{ minHeight: 250, minWidth: 500, maxHeight: 400, maxWidth: 1000, bgcolor: '#f4d0d0', marginBottom: 2,marginRight:5 }}>
        <CardContent>
          <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 45, color: '#060000',fontFamily:'-moz-initial' }}>
            Make the first move
          </Typography>
          <Typography sx={{ textAlign: 'center', fontWeight: 'semi-bold', fontSize: 30, color: '#060000' ,fontFamily:'-moz-initial'}}>
            Start something Epic
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button color="inherit" sx={{background: 'linear-gradient(217deg, rgba(116,12,12,1) 0%, rgba(170,65,65,1) 17%, rgba(191,95,95,1) 34%, rgba(198,120,120,1) 50%, rgba(191,95,95,1) 67%, rgba(170,65,65,1) 84%, rgba(116,12,12,1) 100%)', color: 'white', fontWeight: 'bold', mx: 2, borderRadius:'50px',height:50 }}>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' ,fontFamily:'-moz-initial'}}>Create Account</Link>
          </Button>
        </CardActions>
      </Card>
      <img src={pic} alt='jpg' style={{ position: 'absolute', top: 43, left: 480, height: '63vh' }} />
    </Container>
  </Box>
</Container>

      <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontWeight: 'bolder', fontSize: 50 ,fontFamily:'-moz-initial'}}>We’re not just for dating </p>

<Container>
  <Container>
    <Box>

      <div>
      {/* Profile_1 */}
      <div
        style={{
          position: 'absolute',
          width: '362px',
          height: '625px',
          left: '178px'
        }}>
        {/* Rectangle 37 */}
        <div
          style={{
            position: 'absolute',
            width: '341px',
            height: '487px',
            left: '150px',
            paddingTop: 55,
            background: '#E29F9F',
          }} >
            
          {/* Rectangle 39 */}
          <div
            style={{
              position: 'absolute',
              width: '265px',
              height: '432px',
              left: '40px',
              background: '#8A2020',
              borderRadius: '31px',
            }}></div>

<img src={pic4} style={{ position: 'absolute',
              width: '232px',
              height: '339.79px',
              left: '58px',
              top: '75px',
              borderRadius: '20px',}}/> 


          {/*Student"*/ }
          <div
            style={{
              position: 'absolute',
              width: '58px',
              height: '18px',
              left: '60px',
              top: '440px',
              fontFamily: 'IM FELL Great Primer SC',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
              textAlign: 'center',
              color: '#FFFFFF',
              opacity: 0.8,
            }}>
            Student
          </div>

          {/* Krishna Vamsi, 20 */}
          <div
            style={{
              position: 'absolute',
              width: '189px',
              height: '29px',
              left: '60px',
              top: '415px',
              fontFamily: 'IM FELL Great Primer SC',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '29px',
              textAlign: 'center',
              color: '#FA8989',
            }}>
            Krishna Vamsi, 20
          </div>
          <img src={pic6} style={{position: 'absolute',
                      width: '139.06px',
                      height: '139.06px',
                      left: '10px',
                      top: '30px',
                      background: 'url(image.png)',
                      borderRadius: '188.5px',
                      transform: 'rotate(-19.64deg)'}}/>
          {/* Rectangle 40 */}
          <div
            style={{
              position: 'absolute',
              width: '141px',
              height: '46px',
              left: '100px',
              top: '600px',
              background: '#E7C0C0',
            }}>


              <Button color="inherit" sx={{position: 'absolute',
                height: '24px',
                left: '20px',
                top: '13px',
                width: '100px',
                fontFamily: 'Cabin',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#000000', }}><Link to="/date" style={{ textDecoration: 'none', color: 'black',fontFamily:'-moz-initial' }}>Learn More</Link></Button>
            
          </div>
          { /*Whether you are new to a city or looking to expand your social circle, Connections is a simplified way to create meaningful friendships.*/}
          <div
            style={{
              position: 'absolute',
              width: '344px',
              height: '51px',
              left: '0px',
              top: '515px',
              fontFamily: 'IM FELL Great Primer SC',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              textAlign: 'center',
              color: '#000000',
              fontFamily:'-moz-initial'
            }}>
            Whether you’re new to a city or looking to expand your social circle, Connections is a simplified way to create meaningful friendships.
          </div>

        </div>
      </div>
    </div>
    </Box>
</Container>







<Container>
  <Box>
    <div>
      {/* Profile_2 */}
      <div
        style={{
          position: 'absolute',
          width: '408.15px',
          height: '625px',
          left: '946px',
          //top: '1068px',
        }}
      >

        {/* Rectangle 38 */}
        <div
          style={{
            position: 'absolute',
            width: '341px',
            height: '487px',
            //left: '646px',
            //top: '1068px',
            background: '#E29F9F',
          }}
        >
          
          {/* Rectangle 39 */}
          <div
            style={{
              position: 'absolute',
              width: '265px',
              height: '432px',
              left: '40px',
              top: '55px',
              background: '#8A2020',
              borderRadius: '31px',
            }}
          ></div>
                  <img src={pic5} style={{ position: 'absolute',
              width: '232px',
              height: '339.79px',
              left: '58px',
              top: '75px',
              borderRadius: '20px',}}/> 
          {/* Anjali, 24 */}
          <div
            style={{
              position: 'absolute',
              width: '106px',
              height: '29px',
              left: '65px',
              top: '420px',
              fontFamily: 'IM FELL Great Primer SC',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '29px',
              textAlign: 'center',
              color: '#FA8989',
            }}
          >
            Anjali, 24
          </div>
          <img src={pic7} style={{position: 'absolute',
              width: '145.98px',
              height: '146.48px',
              left: '222.77px',
              top: '280px',
              background: 'url(image.png)',
              borderRadius: '250px',
              transform: 'rotate(25.84deg)'}}/>

          {/* Model */}
          <div
            style={{
              position: 'absolute',
              width: '47px',
              height: '18px',
              left: '65px',
              top: '450px',
              fontFamily: 'IM FELL Great Primer SC',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
              textAlign: 'center',
              color: '#FFFFFF',
              opacity: 0.8,
            }}
          >
            Model
          </div>

          {/* Rectangle 40 */}
          <div
            style={{
              position: 'absolute',
              width: '141px',
              height: '46px',
              left: '100px',
              top: '600px',
              background: '#E7C0C0',
            }}
          >
           <Button color="inherit" sx={{position: 'absolute',
                height: '24px',
                left: '20px',
                top: '13px',
                width: '100px',
                fontFamily: 'Cabin',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#000000', }}><Link to="/bff" style={{ textDecoration: 'none', color: 'black' }}>Learn More</Link></Button>
          </div>

          {/* We believe relationships should begin with respect and equality. Remember, the key to a successful opening line is to be yourself and show genuine interest in the other person. Good luck! */}
          <div
            style={{
              position: 'absolute',
              width: '340px',
              height: '68px',
              top: '515px',
              fontFamily: 'IM FELL Great Primer SC',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              textAlign: 'center',
              color: '#000000',
              fontFamily:'-moz-initial'
            }}
          >
            We believe relationships should begin with respect and equality. Remember, the key to a successful opening line is to be yourself and show genuine interest in the other person. Good luck!
          </div>
          
        </div>
      </div>
    </div>
    </Box>
    </Container>
  </Container>



  <Container maxWidth="xlg" className='dabba-2' sx ={{width: '150vh' , marginLeft: '0', marginTop:100,height:'95vh'}}>
        <Box sx={{ marginTop: '10vh'}}>
        <img src={chat1} alt='jpg' style={{ position: 'absolute', top:'250vh', right: '160vh', height: '12vh' }} />
          <img src={chat2} alt='jpg' style={{ position: 'absolute', top:'265vh', left: '90vh', height: '12vh' }} />
          <img src={chat3} alt='jpg' style={{ position: 'absolute', top:'280vh', right: '188vh', height: '12vh' }} />
          <img src={chat4} alt='jpg' style={{ position: 'absolute', top:'295vh', left: '90vh', height: '12vh' }} />
          <img src={chat5} alt='jpg' style={{ position: 'absolute', top:'305vh', right: '186vh', height: '12vh' }} />
          <img src={chat6} alt='jpg' style={{ position: 'absolute', top:'320vh', left: '97vh', height: '12vh' }} />

          <img src={mid} alt='jpg' style={{ position: 'absolute', width: '50vh',height: '50vh',borderRadius: '500px', top:'265vh' , left:'40vh'}} />

          {/* Include the BasicCard component */}
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,marginLeft:'115vh'}}>
            <Card sx={{ position: 'absolute', minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 600  , bgcolor: '#fff',boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'}}>
          <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#000000',fontFamily:'-moz-initial'}}>
          How it Starts
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#000000',fontFamily:'-moz-initial'}}>
          There’s no equality without respect, and that’s where all healthy relationships start. Two people match with each other first and then any of the two people can send a text to each other and start a conversation.
          </Typography>
        </CardContent>
      </Card>

      </Container>
        </Box>
      </Container>



      <Container idName="bg" sx={{ bgcolor:'#ffc7c7',minWidth: 1519,marginTop: '10vh' }}>
  <Box sx={{ height: '100vh', padding: '0vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="sm" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={pic8} alt='jpg' style={{ position: 'absolute', bottom:120, right: 570, height: '55vh' }} />
      <Card sx={{ minHeight: 220, minWidth: 500, maxHeight: 300, maxWidth: 500, bgcolor: '#ffffff', marginBottom: 2,marginLeft:10 , marginTop:10}}>
        <CardContent>
          <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 45, color: '#060000' ,fontFamily:'-moz-initial'}}>
            Make the first move
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button color="inherit" sx={{ background: 'linear-gradient(217deg, rgba(152,0,0,1) 0%, rgba(152,0,0,0.5) 50%, rgba(152,0,0,0.58) 100%)', color: 'white', fontWeight: 'bold', mx: 2 , height: 60, fontSize:20}}>
            <Link to="/how" style={{ textDecoration: 'none', color: 'white' ,fontFamily:'-moz-initial'}}>Here's How</Link>
          </Button>
        </CardActions>
      </Card>
      <img src={pic9} alt='jpg' style={{ position: 'absolute', top:'10vh', left: 660, height: '60vh' }} />
    </Container>
  </Box>
</Container>








  


    </React.Fragment>
    </div>
  );
}






