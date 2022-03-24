import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './components/data';
import {useState} from 'react';
import Header from './components/Header';
import './nithya.css'
import background from "./images/bg.jpg";
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import { View } from './View';


function App1(props) {
  const { products } = data;
  localStorage.setItem("savedData",JSON.stringify(data));
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  const delLock = () => {
    const lock = "false"
   localStorage.setItem("lock1",lock)
  };
  
   return (
    <div className="App" >
      <div className="row">
      <nav className="topnav1" > 
            <Link to="/login" className='btn btn-outline-danger' style={{marginRight:"20px"}} onClick={() => delLock()}>Logout</Link>
          </nav>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>
    </div>
    
  );
  
}

export default App1;
