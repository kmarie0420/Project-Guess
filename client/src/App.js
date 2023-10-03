import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import CapsuleDetails from "./pages/CapsuleDetails/CapsuleDetails";
import UserContext from "./pages/UserContext/UserContext";


function App() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };
  const handleRegistrationSuccess = (newUserData) => {
    setIsAuthenticated(true);
    setUser(newUserData);
  };
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Header
            onLoginClick={() => setLoginModalVisible(true)}
            onRegisterClick={() => setRegisterModalVisible(true)}
            isAuthenticated={isAuthenticated}
            onLogout={() => {
              setIsAuthenticated(false);
              setUser(null);
            }}
          />
          <main className="app-content">
          <Routes>
              <Route path="/" element={<Landing />} />
              {isAuthenticated && (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/capsule-details" element={<CapsuleDetails />} />
                </>
              )}
          </Routes>
          </main>
          <Login
            visible={loginModalVisible}
            onClose={() => setLoginModalVisible(false)}
            onSuccess={handleLoginSuccess}
          />
          {registerModalVisible && (
            <Register
              onClose={() => setRegisterModalVisible(false)}
              onSuccess={handleRegistrationSuccess}
            />
          )}
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
