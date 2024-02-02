import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './home_pehla.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

export default function SimpleContainer() {
  return (
    <div>
      <Navbar/>
    <React.Fragment>
      <CssBaseline />
      <Container  className='gradient_background' sx={{minWidth: 1519}}>

        <Box sx={{ height: '100vh', padding: '0vh' }}>
          <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ minHeight: 250, minWidth: 500 ,maxHeight: 400  ,maxWidth: 1000,  bgcolor: '#f4d0d0'}}>
              <CardContent>
                <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
                  Make the first move
                </Typography>
                <Typography sx={{textAlign: ' center', fontWeight: 'semi-bold', fontSize: 30 , color: '#060000'}}>
                  Start something Epic
                </Typography>
              </CardContent>
              <CardActions style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button color="inherit" sx={{ bgcolor: '#bf5f5f' ,color: 'black', fontWeight: 'bold', mx: 2 }}><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Create Account</Link></Button>
              </CardActions>
            </Card>
          </Container>
        </Box>
      </Container>

      <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontWeight: 'bolder', fontSize: 50 }}>We’re not just for dating </p>

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
                color: '#000000', }}><Link to="/date" style={{ textDecoration: 'none', color: 'black' }}>Learn More</Link></Button>
            
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


          {/* Anjali, 24 */}
          <div
            style={{
              position: 'absolute',
              width: '106px',
              height: '29px',
              left: '70px',
              top: '410px',
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

          {/* Model */}
          <div
            style={{
              position: 'absolute',
              width: '47px',
              height: '18px',
              left: '70px',
              top: '440px',
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


  

    





  


    </React.Fragment>
    </div>
  );
}


// <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontWeight: 'bolder', fontSize: 50 }}>We’re not just for dating </p>







/* PROFILE-2

          {/* image 13 }
          <div
            style={{
              position: 'absolute',
              width: '232px',
              height: '339.79px',
              //left: '700px',
              //top: '1155px',
              background: 'url(image.png)',
              borderRadius: '20px',
            }}
          ></div>
          {/* image 32 }
          <div
            style={{
              position: 'absolute',
              width: '145.98px',
              height: '146.48px',
              left: '922.77px',
              //top: '1342.98px',
              background: 'url(image.png)',
              borderRadius: '250px',
              transform: 'rotate(25.84deg)',
            }}
          ></div>

          */






/*   PROFILE-1
                    {/* image 33 }
                    <div
                    style={{
                      position: 'absolute',
                      width: '139.06px',
                      height: '139.06px',
                      left: '178px',
                      //top: '1135.74px',
                      background: 'url(image.png)',
                      borderRadius: '188.5px',
                      transform: 'rotate(-19.64deg)',
                    }}
                  ></div>


                            {/* image 12 }
          <div
          style={{
            position: 'absolute',
            width: '232px',
            height: '331px',
            left: '258px',
            //top: '1164px',
            background: 'url(image.png)',
            borderRadius: '20px',
          }}></div>

          */