import React from 'react';
import logo from '../../images/logo.png';
import '../Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo-imag" srcset="" />
        <nav>
           <a href="/Shop">Shop</a>
           <a href="/Order">Order view</a>
           <a href="/Inventory">Inventory</a>
        </nav>
        </div>
    );
};

export default Header;