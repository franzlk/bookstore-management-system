import React, { useState } from 'react';
import '../style/Login.css'; 

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('http://localhost:8081/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.status === 200) {
                // Login successful
                console.log('Login successful');
                // Call the handleLogin function passed as a prop from App.js
                handleLogin();
            } else if (response.status === 401) {
                // Unauthorized - Invalid username or password
                console.error('Login failed: Invalid username or password');
                setError('Invalid username or password');
            } else {
                // Other error status codes
                console.error('Login failed with status:', response.status);
                setError('An error occurred during login');
            }
        } catch (error) {
            // Network error or other exception
            console.error('Error occurred during login:', error.message);
            setError('An error occurred during login');
        }
    };

    console.log('Rendering Login component');

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
