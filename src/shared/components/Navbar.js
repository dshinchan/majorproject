import React from 'react';
import './navbar.css';
import cartImage from './cart.png';
import searchImage from './search.png';
import laptopback from './laptopback.jpeg'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      <div className='welcome-box'>
        <p>Welcome to our store</p>
      </div>
      <div className='action-container' style={{ backgroundImage: `url(${laptopback})` }}>
        <p>GoLaptops</p>

       
      </div>
    </div>
  );
};

export default Navbar;
 
