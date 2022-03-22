import React, { Component,useState } from 'react';
import background from "./images/bg.jpg";
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import { View1 } from './Addfood';
import Register from './register';

const getDatafromLS=()=>{
    const data = localStorage.getItem('food');
    if(data){
      return JSON.parse(data);
      
    }
    else{
      return []
    }
    
  }

  

function ViewFood() {
  
    const [books1, setbooks]=useState(getDatafromLS());
    console.log(books1.products);
    console.log(localStorage.getItem('formdata'))

    
    return ( 
        
        <div style={{ backgroundImage: `url(${background})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>

        <nav className="topnav1" > 
            <Link to="/View-users" className='users btn btn-outline-dark'>View-Users</Link> 
            <Link to="/Add-users" className='users btn btn-outline-dark'>Add-Users</Link> 
            <Link to="/View-foods" className='users btn btn-outline-dark'>View-Foods</Link> 
            <Link to="/Add-foods" className='users btn btn-outline-dark'>Add-Foods</Link> 
            <Link to="/login" className='link1'>Logout</Link>
          </nav>

          <div className='view-container'>
          {books1.products.length>0&&<> 
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image Url</th>
                  </tr>
                </thead>
                <tbody>
                  <View1 books1={books1.products}></View1>
                </tbody>
              </table>
            </div>
            {/* <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button> */}
          </>}
          {books1.products.length < 1 && <div><h1>No users are added yet</h1></div>}
        </div> 

       
    </div>
    
     );
}

export default ViewFood;