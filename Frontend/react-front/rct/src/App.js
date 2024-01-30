// App.js or Home.js
import React from 'react';
import HomeContainer from './home';
import Footer from './footer';
import Navbar from './navbar';
function App() {
  return (
    <div>
            <Navbar/>
      <HomeContainer />
      <Footer />

    </div>
  );
}

export default App;
