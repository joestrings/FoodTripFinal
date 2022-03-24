//this is the main login page
import React, { Component } from 'react';
import './RegistrationCss.css';
import { Link, Switch, Route, useHistory, useLocation} from "react-router-dom";
import Welcome from './Welcome';
import background from "./images/bg.jpg";
import Header from './Header';
import Navbar3 from './Navbar3';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
     
      error:''
    }
  }

  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  
 
  onSubmit = (e) =>{
    const lock1 = "true"
    localStorage.setItem("lock1",lock1);
    let { history } = this.props
    let ele;
    e.preventDefault()
    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.name.length > 0 && this.state.password.length > 0){
          if (arr.name == this.state.name && (arr.password == this.state.password)) {
            let user = this.state.name;
            alert("successfully signedin");
            history.push({ pathname: "/fooditems", user: this.state.name});
            <Header data={this.state.name}></Header>
            
          }else{
            this.setState({error:'Please check your email or password'})
          }
        }
      }
      )
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
          <h1>Login Page</h1>
          <label>Name</label>
          <input type="text" className="form-control" autoFocus placeholder='Username' value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder='password' className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onLogin}>Login</button>
        </div>
        </div>
      </form>
     
    )
  }
}

export default Login;
