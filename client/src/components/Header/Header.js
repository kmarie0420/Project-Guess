import React, { useState } from 'react';
import './Header.css';
import { Button, DatePicker } from 'antd';
import { Link, } from 'react-router-dom';

const Header = ({ onLoginClick, onRegisterClick, isAuthenticated, onLogout }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className="app-header">
      <div className="logo">
        <i className="fa-brands fa-replyd fa-2xl"></i><span className="logo-text">memories</span>
      </div>
      <button className="menu-toggle" onClick={() => setIsMenuVisible(!isMenuVisible)}>☰</button>
      <ul className={`menu ${isMenuVisible ? 'active' : ''}`}>
      {isAuthenticated ? (
          <li key="logout">
            <Button type="default" onClick={onLogout}>Logout</Button>
          </li>
        ) : (
          <>
            <li key="login">
              <Button type="primary" onClick={onLoginClick}>Sign in</Button>
            </li>
            <li key="register">
              <Button type="default" onClick={onRegisterClick}>Sign Up</Button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
