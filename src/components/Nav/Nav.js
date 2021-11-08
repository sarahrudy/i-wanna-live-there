import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <header className='nav-container'>
      <Link to="/">
        <h1 className="nav-h1">softWhere?</h1>
      </Link>
      <p className="nav-p">TOP US CITIES TO LIVE AS A SOFTWARE DEVELOPER</p>
    </header>
  )
};

export default Nav;