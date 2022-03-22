import React, { Component } from 'react';
import Register from './register';
import Welcome from './Welcome';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Login from './LoginPage';
import AdminLogin from './AdminLogin';
import './Topnav.css'
import Footer from './footer';
import { FaShoppingCart } from "react-icons/fa";
import MainPage from './MainPage';
import Admin from './Admin';
import background from "./images/bg.jpg";


function Adminpage() {
    return ( 
        <div className="App" style={{ backgroundImage: `url(${background})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
            
        <nav className="topnav1" > 
            <Link to="/View-users" className='users btn btn-outline-dark'>View-Users</Link> 
            <Link to="/Add-users" className='users btn btn-outline-dark'>Add-Users</Link> 
            <Link to="/View-foods" className='users btn btn-outline-dark'>View-Foods</Link> 
            <Link to="/Add-foods" className='users btn btn-outline-dark'>Add-Foods</Link> 
            <Link to="/logout" className='link1'>Logout</Link> 

          </nav>
          
          
          </div>
     );
}

export default Adminpage;