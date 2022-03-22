//this is the admin login page

import React, { Component } from 'react';
import './RegistrationCss.css';
import { Link, Switch, Route, useHistory, useLocation} from "react-router-dom";
import Welcome from './Welcome';
import background from "./images/bg.jpg";
import Adminpage from './Admin';

class AdminLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      error:''
    }
  }

  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onSubmit = (e) =>{
     let { history } = this.props
    
        if((this.state.name == "Admin123")&&(this.state.password == "Admin123"))
        {
            history.push({ pathname: "/Adminpage" });
            
          }else{
            alert('Please check your email or password');
          }

 }
  
  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
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
        <div id="register1">
        <p className="error">
          {this.state.error}
        </p>
        <div className="form-group">
          <h1>AdminLogin</h1>
          <label>Name</label>
          <input type="text" className="form-control" autoFocus placeholder='Username' value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"placeholder='Password' value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block" >Login</button>
        </div>
        </div>
      </form>
    )
  }
}

export default AdminLogin;
