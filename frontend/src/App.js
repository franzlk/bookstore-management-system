import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import your Dashboard component

function App() {
  // Define a state to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Perform login validation
    // Assuming login validation is successful, update isLoggedIn state to true
    setIsLoggedIn(true);
  };

  console.log('isLoggedIn:', isLoggedIn); // Log the value of isLoggedIn for debugging

  return (
    <Router>
      <Routes>
        {/* Route for Login component */}
        <Route
          path="/"
          element={<Login handleLogin={handleLogin} />}
        />
        {/* Private route for Dashboard component */}
        <Route
          path="/dashboard"
          element={
            // Render Dashboard component only if isLoggedIn is true, otherwise redirect to Login
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
