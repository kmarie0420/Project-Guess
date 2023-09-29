import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import 'antd/dist/antd.css';
// import { Button, DatePicker } from 'antd';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header 
          onLoginClick={() => setLoginModalVisible(true)} 
          onRegisterClick={() => setRegisterModalVisible(true)} 
        />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>

        <Login 
  visible={loginModalVisible} 
  onClose={() => setLoginModalVisible(false)} 
/>

{registerModalVisible && (
  <Register open={registerModalVisible} onClose={() => setRegisterModalVisible(false)} />
)}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
