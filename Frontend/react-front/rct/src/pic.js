import React, { useState } from 'react';
import './home_pehla.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar3';
import PP from './signup/pp.png';
import axios from 'axios';

const SimpleImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Display a preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(file); // Store the file itself in the state
        setIsImageUploaded(true); // Set state to indicate image upload
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setIsImageUploaded(false); // Reset state when no image is selected
    }
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage); // Append the file directly

      // Replace 'http://localhost:8000/upload' with your actual backend endpoint
      const response = await axios.post('http://localhost:8000/pic', formData);

      if (response.status === 201) {
        console.log('Image uploaded successfully');
        // Handle success, e.g., redirect to the next page
      }
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(to right,#f0b69d, #ef7b7b)'
    }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: 75, fontFamily: '-moz-initial', fontSize: 45, color: '#001844' }}>Select a Profile Picture</h1>

      {/* Image uploader */}
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button
          component="label"
          color="inherit"
          sx={{ bgcolor: '#980000', color: 'white', fontWeight: 'bold', '&:hover': { bgcolor: '#001844' } }}
        >
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </Button>
      </div>

      {/* Display the selected image preview */}
      {selectedImage && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <p>Selected Image Preview:</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
      )}

      {/* Next button (disabled if no image uploaded) */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Button
          color="inherit"
          sx={{
            bgcolor: '#980000',
            color: 'white',
            fontWeight: 'bold',
            mx: 2,
            '&:hover': { bgcolor: '#001844' },
          }}
          disabled={!isImageUploaded}
          onClick={handleImageUpload}
        >
          <Link to="/myaccount" style={{ textDecoration: 'none', color: 'white', '&:hover': { color: '#000000' } }}>
            Next
          </Link>
        </Button>
      </div>

      <img src={PP} alt='jpg' style={{ position: 'absolute', top: '40vh', right: 40, height: '60vh' }} />
    </div>
  );
};

export default SimpleImageUploader;
