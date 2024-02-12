// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import Navbar3 from './Navbar3'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Link, useNavigate} from 'react-router-dom';
// import Sign3 from './signup/sign3.png'
// import Sign4 from './signup/sign4.png'


// export default function SignUp1() {
//   const navigate = useNavigate();

//   const [isSubmitEnabled, setSubmitEnabled] = useState(false);
//   const [formInputs, setFormInputs] = useState({

//     firstName: '',
//     lastName: ''
//   });
//   const [nameMismatchError, setNameMismatchError] = useState(false);

//   useEffect(() => {
//     // Check if all required fields are filled to enable the submit button
//     const { firstName, lastName } = formInputs;
//     const isValid = firstName.trim() !== '' && lastName.trim() !== '';
//     setSubmitEnabled(isValid);
//   }, [formInputs]);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
//   };

//   const handleInputBlur = (id, value) => {
//     // Log the input when the user moves away from the text field
//     console.log(`Input changed - ${id}: ${value}`);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstName, lastName } = formInputs;

//     // Check if names match
//     if (firstName === lastName) {
//       console.error("firstName and lastName cannot be the same");
//       // Set error state
//       setNameMismatchError(true);
//       setFormInputs({
//         firstName: '',
//         lastName: ''
//       });
//       return;
//     }

//     try {
//       const response = await Axios.post('http://localhost:8000/signup_1', formInputs);

//       // Check the response status and handle accordingly
//       if (response.status === 201) {
//         // Success: You may want to redirect or show a success message
//         console.log('Name saved successfully');
//         navigate('/hobbies'); // Redirect to the next page using useNavigate
//       } else {
//         // Error: Handle the error response
//         console.error('Error creating user:', response.data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{
//       background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,20,20,1) 100%)',
//       height: '100vh',
//       width: '100vw'
//     }}>
//       <Navbar3 />
//       <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70, fontSize: 40, fontFamily: 'initial', }}>Please fill in the following details</p>
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', alignItems: 'center'
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div style={{ borderColor: 'black' }}>
//         <TextField
//           style={{ marginTop: 30 }}
//           required
//           id="First_Name"
//           label="First Name"
//           value={formInputs.firstName}
//           onChange={handleInputChange}
//           onBlur={() => handleInputBlur("firstName", formInputs.firstName)}
//         />
//           <br />
//           <TextField
//           style={{ marginTop: 30, zIndex: 1 }}  
//           required
//           id="Last_Name"
//           label="Last Name"
//           value={formInputs.lastName}
//           onChange={handleInputChange}
//           onBlur={() => handleInputBlur("lastName", formInputs.lastName)}
//         />
//         </div>
//       </Box>
//       {nameMismatchError && <p style={{ color: 'red' }}>Names do match</p>}
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
//         <Button type="submit"
//           color="inherit"
//           sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2, '&:hover': { bgcolor: '#bd1414' } }}
//           disabled={!isSubmitEnabled} onClick={handleSubmit}
//         ><Link to="/hobbies" style={{ textDecoration: 'none', color: 'white' ,fontFamily:'-moz-initial'}}>
//           Submit</Link>
//         </Button>
//       </div>
//       <img src={Sign3} alt='jpg' style={{ position: 'absolute', top: '18.56vh', left: 150, height: '80vh' }} />
//       <img src={Sign4} alt='jpg' style={{ position: 'absolute', top: '18.56vh', right: 150, height: '80vh' }} />
//     </div>
//   );
// };








































import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar3 from './Navbar3';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Sign3 from './signup/sign3.png';
import Sign4 from './signup/sign4.png';

export default function SignUp1() {
  const navigate = useNavigate();

  const [isSubmitEnabled, setSubmitEnabled] = useState(false);
  const [nameInputs, setNameInputs] = useState({
    firstName: '',
    lastName: ''
  });
  const [nameMismatchError, setNameMismatchError] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled to enable the submit button
    const { firstName, lastName } = nameInputs;
    const isValid = firstName.trim() !== '' && lastName.trim() !== '';
    setSubmitEnabled(isValid);
  }, [nameInputs]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNameInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
  };

  const handleInputBlur = (id, value) => {
    console.log(`Input changed - ${id}: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { firstName, lastName } = nameInputs;

      // Check if names match
      if (firstName === lastName) {
        console.error("firstName and lastName cannot be the same");
        // Set error state
        setNameMismatchError(true);
        setNameInputs({
          firstName: '',
          lastName: ''
        });
        return;
      }

      const response = await Axios.post('http://localhost:8000/signup_1', nameInputs);

      // Check the response status and handle accordingly
      if (response.status === 201) {
        // Success: You may want to redirect or show a success message
        console.log('Name saved successfully');
        navigate('/hobbies'); // Redirect to the next page using useNavigate
      } else {
        // Error: Handle the error response
        console.error('Error creating user:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately (e.g., display an error message to the user)
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(217deg, rgba(251,204,204,1) 0%, rgba(189,20,20,1) 100%)',
      height: '100vh',
      width: '100vw'
    }}>
      <Navbar3 />
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70, fontSize: 40, fontFamily: 'initial' }}>Please fill in the following details</p>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ borderColor: 'black' }}>
          <TextField
            style={{ marginTop: 30 }}
            required
            id="firstName"
            label="First Name"
            value={nameInputs.firstName}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur("firstName", nameInputs.firstName)}
          />
          <br />
          <TextField
            style={{ marginTop: 30, zIndex: 1 }}
            required
            id="lastName"
            label="Last Name"
            value={nameInputs.lastName}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur("lastName", nameInputs.lastName)}
          />
        </div>
      </Box>
      {nameMismatchError && <p style={{ color: 'red' }}>Names do match</p>}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Button
          type="submit"
          color="inherit"
          sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', mx: 2, '&:hover': { bgcolor: '#bd1414' } }}
          disabled={!isSubmitEnabled} onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      <img src={Sign3} alt='jpg' style={{ position: 'absolute', top: '18.56vh', left: 150, height: '80vh' }} />
      <img src={Sign4} alt='jpg' style={{ position: 'absolute', top: '18.56vh', right: 150, height: '80vh' }} />
    </div>
  );
}
