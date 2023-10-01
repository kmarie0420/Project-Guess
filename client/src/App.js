import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
// import 'antd/dist/antd.css';
// import { Button, DatePicker } from 'antd';

function App() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // NEW: authentication state

  return (
    <Router>
      <div className="App">
        <Header 
          onLoginClick={() => {
            setLoginModalVisible(true);
         
            setIsAuthenticated(true);
          }} 
          onRegisterClick={() => setRegisterModalVisible(true)} 
        />

        <main className="app-content">
          <Routes>
            {isAuthenticated ? (
              <Route path="/" element={<Dashboard />} />
            ) : (
              <Route path="/" element={<Landing />} />
            )}
            {/* holding this spot for additional routes if we need them */}
          </Routes>
        </main>

        <Login 
          visible={loginModalVisible} 
          onClose={() => setLoginModalVisible(false)} 
        />

        {registerModalVisible && (
          <Register onClose={() => setRegisterModalVisible(false)} />
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
