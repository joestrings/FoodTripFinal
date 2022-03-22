//this is the main page

import React from 'react';
import Footer from './footer';
import background from "./images/bg.jpg";
import Login from './LoginPage';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';


import Register from './register';

class Welcome extends React.Component {
  
  render() {
    
    const myStyle={
      backgroundImage: `url(${background})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
    return (
      <div style={myStyle}>
        <div>
        {/* <h1>hello,{this.props.location.user}</h1> */}
        <Navbar>

        </Navbar>
        <br></br>
      <br></br> 
       <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      {/* <Navbar3></Navbar3>  
     <Navbar2></Navbar2> */}
     <Footer/>
        </div>
      </div>
    )
  }
}

export default Welcome;