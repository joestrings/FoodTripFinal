//this is for the center logo thats it

import React, { Component } from 'react';
import Login from './LoginPage';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Register from './register';
import styles from './NavbarCss.css';
import logo from "./images/logo.png";
import './Navbar2.css'
import { FaStar,FaRegStar } from "react-icons/fa";
import user1 from "./images/user1.jpg";


function Navbar3() {
    const history=useHistory();
    const location = useLocation();
    return (
//         <div classNameName="card" style={{width: 450,height:300}}> 
//         <span>
//             <div classNameName="card-body">
//              <h5 classNameName="card-title">Card title</h5>
//             <p classNameNme="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//             Some quick example text to build on the card title and make up the bulk of the card's content.
            
//             </p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
        
//         </div>
        

//         </span>
        
// </div>
<div className="row">
  <div className="col-sm-6" id='navbar3'>
    <div className="card">
      <div className="card-body" style={{background:"rgba(150, 149, 148, 0.274)"}}>
          <img src={user1} alt="logo" className="center" style={{borderRadius:'50%',height:150,width:150}}></img>
        <h5 className="card-title">PV Joel</h5>
        <p className="card-text">The place with lovely amazing food, awesome ambience , excellent play area nice hangout place for kids they just loved it , nice staff very polite</p>
        <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
      </div>
    </div>
  </div>
  <div className="col-sm-6" id='navbar3'>
    <div className="card">
      <div className="card-body" style={{background:"rgba(150, 149, 148, 0.274)"}}>
          <img src={user1} alt="logo" className="center" style={{borderRadius:'50%',height:150,width:150}}></img>
        <h5 className="card-title">PV Joel</h5>
        <p className="card-text">The place with lovely amazing food, awesome ambience , excellent play area nice hangout place for kids they just loved it , nice staff very polite</p>
        <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
      </div>
    </div>
  </div>
  <hr></hr>
  <br></br>
  <div className="col-sm-6">
    <div className="card" id='navbar3'>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card" id='navbar3'>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <hr></hr>
  <br></br>
  <div className="col-sm-6">
    <div className="card" id='navbar3'>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6" id='navbar3'>
    <div className="card" id='navbar3'>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <hr></hr>
  <br></br>
</div>

       
    );
  }

export default Navbar3