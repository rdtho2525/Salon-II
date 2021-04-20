import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  return (
    <header className="nav-header">
      <Link to="/" className="logo-container">
        <h2 className="header-title">Met in a Minute</h2>
      </Link>
      <Link to="/favorites" className="user-buttons">
        <h2>favorites</h2>
      </Link>
    </header>
  )
}

export default Header;
