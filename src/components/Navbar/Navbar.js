import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='portfolio'>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='prices'>Prices</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
