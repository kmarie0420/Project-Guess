import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        Rememories
      </div>
      <ul className="menu">
        <li key="home">
          <a href="/">Home</a>
        </li>
        <li key="login">
          <a href="/login">Login</a>
        </li>
        <li key="register">
          <a href="/register">Register</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
