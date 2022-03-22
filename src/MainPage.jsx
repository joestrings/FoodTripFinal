import React, { Component } from 'react';
import background from "./images/bg.jpg";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const myStyle={
            backgroundImage: `url(${background})`,
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return ( 
            <div style={myStyle}>
                
            </div>
         );
    }
}
 
export default MainPage;