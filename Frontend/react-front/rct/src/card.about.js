/*import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Combine the components into a single object
const AboutCard = () => {
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
};

const About = () => {
  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff'}}>
        <CardContent>
          <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
            Why Connect Matters
          </Typography>
          <Typography sx={{textAlign: ' left',fontSize: 15, color: '#060000'}}>
            Healthy relationships are central to living a positive, productive life. Connection is a social network that allows you to feel empowered while you make those connections, whether you’re dating or looking for friends. One first move on Connection could change your life.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

const Abou= () => {
  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Abou sx={{ minHeight: 100, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#ffffff'}}>
      <CardContent>
        <Typography sx={{textAlign: ' left', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
        The Connect Effect
        </Typography>
        <Typography sx={{textAlign: ' left',fontSize: 15, color: '#060000'}}>
        We encourage integrity, kindness, equality, confidence, and respect during all stages of any relationship — whether online or offline. Bumble is where people go to learn how to establish and maintain healthier connections.
        </Typography>
        
      </CardContent>
    </Abou>
    </Container>
  );
  }
// Export the combined components
export { AboutCard, About,Abou };
*/





import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import About2 from '@mui/material/Card';

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

