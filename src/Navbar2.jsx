//this is for the center logo thats it

import React, { Component } from 'react';
import Login from './LoginPage';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Register from './register';
import styles from './NavbarCss.css';
import logo from "./images/logo.png";
import './Navbar2.css'



function Navbar2() {
    const history=useHistory();
    const location = useLocation();
    return (
        <div>  
        <img src={logo} alt="logo" className="center" style={{borderRadius:'50%',marginTop:70,marginLeft:(-600),marginBottom:60}}></img>
        <div id='right-container'>
            <p>
                <h1>Food-Trip.com</h1>
                <hr></hr>
                <b>
                Food-Trip.com is an Indian multinational restaurant aggregator 
                and food delivery company founded by Deepinder Goyal and Pankaj Chaddah in 2008.
                Zomato provides information, menus and user-reviews of restaurants as well as
                food delivery options from partner restaurants in select cities.
                As of 2019, the service is available in 24 countries and in more than 10,000 cities</b>
            </p>
        </div>
      </div>
    );
  }

export default Navbar2