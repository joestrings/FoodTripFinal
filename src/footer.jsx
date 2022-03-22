//this is the footer component

import React, { Component } from 'react';

import './App.css';
import Register from './register';
import Welcome from './Welcome';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Login from './LoginPage';
import AdminLogin from './AdminLogin';
import './Topnav.css'
function Footer() {
    return (
  <div>
       <nav className="topnav" >    
       <Link className='Link'> © Food-Trip.com™ Ltd. All rights reserved.</Link>
        <Link to="/login" className='link1'>AboutUs</Link>
        <Link to="/login" className='link1'>ContactUs</Link>
        </nav>
        
        
  </div>
    );
  }
  
  export default Footer;