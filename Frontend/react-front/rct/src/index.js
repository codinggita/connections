import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Appa from './about_app'
import Login from './login'
import Date from './date_app'
import SignUp from './Signup'
import How from './here_how'
import reportWebVitals from './reportWebVitals';
//import {Link} from "react-router-dom";
//import { NavLink } from "react-router-dom";
import Navbar from './navbar';
//import Container from './home_pehla';
//import Card from './card';

import{BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App/>}/>
        <Route path = "/about" element={<Appa/>}/>
        <Route path = "/date" element={<Date/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
        <Route path = "/how" element={<How/>}/>

        <Route path = "/*" element={<p>No Route Found Here</p>}/>
      </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





