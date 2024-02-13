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
import Success from './subscription';
import Profile from './myprofile'
import Account from './myaccount';
import Del from './delacc';
import Sure from './sure';
import Request from './match_req';
import Chat from './chat';
import Upma from './App';
import UpdatePWD from './updatepwd';
//import Text from './server';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter, Routes, Route } from "react-router-dom";

//        <Route path = "/chat" element={<Chat/>}/>


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
        <Route path = "/myaccount" element={<Account/>}/>
        <Route path = "/myprofile" element={<Profile/>}/>
        <Route path = "/signup_1" element={<SignUp1/>}/>
        <Route path = "/hobbies" element={<Hobbies/>}/>
        <Route path = "/pic" element={<Pic/>}/>
        <Route path = "/bff" element={<BFF/>}/>
        <Route path = "/deluser" element={<Del/>}/>
        <Route path = "/sure" element={<Sure/>}/>
        <Route path = "/match" element={<Request/>}/>
        <Route path = "/quiz" element={<Upma/>}/>
        <Route path = "/chat" element={<Chat/>}/>
        <Route path = "/subscription" element={<Success/>}/>
        <Route path = "/update" element = {<UpdatePWD/>}/>
        <Route path = "/*" element={<p>No Route Found Here</p>}/>

        

        
      </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





