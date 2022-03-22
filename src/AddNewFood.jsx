//this is for registration
import React, { Component } from 'react';
import './RegistrationCss.css';
import background from "./images/bg.jpg";
import { Link, Switch, Route, useHistory, useLocation} from "react-router-dom";

class AddNewFood extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:''
    }
  }
  render() {
    const myStyle={
      backgroundImage: `url(${background})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
    return (

        
      
      <form onSubmit={this.onSubmit}>
        <div id="main-registration-container" style={myStyle}>
            
        <nav className="topnav1" > 
            <Link to="/View-users" className='users btn btn-outline-dark'>View-Users</Link> 
            <Link to="/Add-users" className='users btn btn-outline-dark'>Add-Users</Link> 
            <Link to="/View-foods" className='users btn btn-outline-dark'>View-Foods</Link> 
            <Link to="/Add-foods" className='users btn btn-outline-dark'>Add-Foods</Link>
            <Link to="/login" className='link1'>Logout</Link> 
          </nav>
          <div><h1>Cant Add New Items</h1></div>
     
        </div>
      </form>
    )
  }
}

export default AddNewFood;