import './App.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import MyRouter from './router/index.js';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
     
      {/* <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/contact-us">Contact</Link> */}
      <MyRouter/>
    </div> 
  );
}

export default App;
