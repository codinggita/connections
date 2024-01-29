import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Footer from './footer';
import{BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<App/>}/>
        <Route path = "/about" element={<p>About Page</p>}/>
        <Route path = "/login" element={<p>Login Page</p>}/>
        <Route path = "/*" element={<p>No Route Found Here</p>}/>
      </Routes>
      <Footer />
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





