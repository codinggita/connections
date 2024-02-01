import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './home_pehla';
import Appa from './about_pehla'
import Login from './login'
import Date from './date_pehla'
import SignUp from './Signup'
import SignUp1 from './signup_1'
import How from './here_how'
import Hobbies from './hobbies';
import Pic from './pic';
import BFF from './bff'
import reportWebVitals from './reportWebVitals';
import{BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>}/>
        <Route path="/home" element={<App/>}/>
        <Route path = "/about" element={<Appa/>}/>
        <Route path = "/date" element={<Date/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
        <Route path = "/how" element={<How/>}/>
        <Route path = "/signup_1" element={<SignUp1/>}/>
        <Route path = "/hobbies" element={<Hobbies/>}/>
        <Route path = "/pic" element={<Pic/>}/>
        <Route path = "/bff" element={<BFF/>}/>
        

        <Route path = "/*" element={<p>No Route Found Here</p>}/>
      </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





