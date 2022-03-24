//this is the header component
import Register from './register';
import Welcome from './Welcome';
import Login from './LoginPage';
import AdminLogin from './AdminLogin';
import './Topnav.css'
import Footer from './footer';

import React, { Component } from 'react';


import MainPage from './MainPage';
import Adminpage from './Admin';
import Users from './Users';
import Adduser from './Addusers';
import Logout from './Logout';
import ViewFood from './Viewfood';
import AddNewFood from './AddNewFood';
import App1 from './App1';
// import Fooditems from './Fooditems';
// import Cart from './components/Cart';
import Success from './components/Success';
import Card from './components/Card';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import { useState } from 'react';

function Header(props) {

  const[lock,useLock]=useState("false")
  localStorage.setItem("lock",lock)
  console.log({lock})
  
  const history=useHistory();
  const location = useLocation();



  const goForward = () => {
    if(localStorage.getItem('lock')=="false"&&localStorage.getItem('lock1')=="true")
    {
    history.goForward();
    }
    else
    {
    alert("please login")
    }
  }

  const goBack = () => {
    if(localStorage.getItem('lock')=="false"&&localStorage.getItem('lock1')=="true")
    {
    history.goBack();
    }
    else{
    alert("please login")
    }
  }
    return (
  
      <div className="App">
        <nav className="topnav" > 
        <Link className='Link'> <button onClick={goBack} style={{width:50}}><FaArrowAltCircleLeft/></button> </Link> 
            <Link to="/" className='Link'>Food-Trip.Com</Link> 
            {/* <a href="example.com">
                 <FaShoppingCart /> 
             </a>  */}
             <Link className='link1'> <button onClick={goForward} style={{width:50}}  ><FaArrowAltCircleRight/></button> </Link> 
            <Link to="/reg" className='link1'>Register</Link>
            <Link to="/Admin" className='link1'>Admin</Link> 
            <Link to="/login" className='link1'>Login</Link> 
            
                     
          </nav>
          
          <Switch>
          <Route path="/" exact component={Welcome}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/Admin" exact component={AdminLogin}/>
            <Route path="/reg" exact component={Register}/>  
            <Route path="/Welcome" exact component={Welcome}/>
            <Route path="/Adminpage" exact component={Adminpage}/>  
            <Route path="/View-users" exact component={Users}/>
            <Route path="/Add-users" exact component={Adduser}/>
            <Route path="/View-foods" exact component={ViewFood}/> 
            <Route path="/Add-foods" exact component={AddNewFood}/> 
            <Route path="/logout" exact component={Logout}/> 
            <Route path="/fooditems" exact component={App1}/>
            <Route path="/success" exact component={Success}/>
            <Route path="/Card" exact component={Card}/>

          </Switch>
      </div>
    );
  }
  
  export default Header;
  