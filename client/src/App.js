import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import 'antd/dist/antd.css';
// import { Button, DatePicker } from 'antd';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import LoginRegister from './pages/LoginRegister/LoginRegister.js';

function App() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header onLoginClick={() => setLoginModalVisible(true)} />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* Add other routes here, for example:
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            */}
          </Routes>
        </main>

        <Footer />

        {/* <LoginRegister
          visible={loginModalVisible}
          onClose={() => setLoginModalVisible(false)}
          /> */}
      </div>
    </Router>
  );
}

export default App;

