import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login handleLogin={() => setIsLoggedIn(true)} />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" replace />} />
      <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" replace />} />
      <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" replace />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
