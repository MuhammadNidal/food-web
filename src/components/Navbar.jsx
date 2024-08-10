import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo'> Food Menu</div>
            <ul>
            <li ><a href='#Home'>Home</a></li>
            <li ><a href='#About'>About</a></li>
            <li ><a href='#Food'>Food</a></li>
            <li ><a href='#Contact'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar