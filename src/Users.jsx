import React, { Component,useState } from 'react';
import background from "./images/bg.jpg";
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import { View } from './View';
import Register from './register';

const getDatafromLS=()=>{
    const data = localStorage.getItem('formdata');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }

  

function Users() {

    const [books, setbooks]=useState(getDatafromLS());

    const deleteBook=(name)=>{
        const filteredBooks=books.filter((element,index)=>{
          return element.name !== name
        })
        setbooks(filteredBooks);
      }

    
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
          {books.length>0&&<> 
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone num</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            {/* <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button> */}
          </>}
          {books.length < 1 && <div><h1>No users are added yet</h1></div>}
        </div> 

       
    </div>
    
     );
}

export default Users;