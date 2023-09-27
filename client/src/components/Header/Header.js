import React from 'react';
import './Header.css';
import { Button, DatePicker } from 'antd';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        Re-memories
      </div>
      <ul className="menu">
        <li key="home">
        <Button type="primary">Home</Button>
        </li>
        <li key="login">
        <Button type="primary">Login</Button>
        </li>
        <li key="register">
        <Button type="primary">Register</Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
