import './App.css';
import Register from './register';
import Welcome from './Welcome';
import { Link, Switch, Route, UseHistory, UseLocation, useHistory, useLocation } from "react-router-dom";
import Login from './LoginPage';
import AdminLogin from './AdminLogin';
import './Topnav.css'
import Footer from './footer';
import Header from './Header';
import Users from './Users';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import data from './components/data';
import App1 from './App1';

function App() {
  localStorage.setItem("food",JSON.stringify(data));
  return (

    <div className="App">
     
      <Header></Header>
      {/* <App1>

      </App1> */}
      
      


      
      </div>
  );
}

export default App;



