import './App.css';
import { useState, useEffect } from 'react';
import{Routes, Route} from 'react-router-dom';
import{NavLink} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shop from './components/Shop';
import Admin from './components/Admin';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
// import AnimatedSwitch from 'react-router-transition';


function App() {
  return (
    <div className="App">

      <Routes>
      {/* <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    > */}
        <Route path='/' element = {<Login/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Shop' element = {<Shop/>}/>
        <Route path='/Admin' element = {<Admin/>}/>
        <Route path='/Cart' element = {<Cart/>}/>
        <Route path='/ProductPage' element = {<ProductPage/>}/>
        <Route path='/Register' element = {<Register/>}/>
        {/* </AnimatedSwitch> */}
      </Routes>
   
    </div>
  );
}

export default App;
