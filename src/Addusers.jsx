//this is for registration
import React, { Component } from 'react';
import './RegistrationCss.css';
import background from "./images/bg.jpg";
import { Link, Switch, Route, useHistory, useLocation} from "react-router-dom";

class Adduser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:''
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

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  onSubmit = (e) =>{
    let { history } = this.props
    let ob = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    }
    let olddata = localStorage.getItem('formdata');
    if(olddata==null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('formdata', JSON.stringify(olddata));
      history.push({ pathname: "/Welcome" });
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("formdata", JSON.stringify(oldArr))
      console.log(oldArr,'hhg')
      alert("Registration successfull")
      history.push({ pathname: "/View-users" });
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
          
      <div id="register1">
        <div className="form-group">
        <h1>Add-New-User</h1>
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
        </div>
        </div>
      </form>
    )
  }
}

export default Adduser;