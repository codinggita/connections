import React from 'react';

const SimpleImageUploader = () => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected Image:', file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <button>Choose Photo</button>
      </label>
    </div>
  );
};

export default SimpleImageUploader;
