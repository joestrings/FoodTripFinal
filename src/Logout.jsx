//this is the header component
import Register from './register';
import Welcome from './Welcome';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Login from './LoginPage';
import AdminLogin from './AdminLogin';
import './Topnav.css'
import Footer from './footer';

import React, { Component } from 'react';

import { FaShoppingCart } from "react-icons/fa";
import MainPage from './MainPage';
import Adminpage from './Admin';
import Users from './Users';
import Adduser from './Addusers';

function Logout() {
  
    return (
  
     
       
        <Login>
        </Login> 
         
     
    );
  }
  
  export default Logout;
  