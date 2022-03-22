//this is for the center logo thats it

import React, { Component } from 'react';
import Login from './LoginPage';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Register from './register';
import styles from './NavbarCss.css';
import logo from "./images/logo.png";



function Navbar() {
    const history=useHistory();
    const location = useLocation();
    return (
        <div>  
        <img src={logo} alt="logo" className="center" style={{borderRadius:'50%',marginTop:70}}></img>
      </div>
    );
  }

export default Navbar