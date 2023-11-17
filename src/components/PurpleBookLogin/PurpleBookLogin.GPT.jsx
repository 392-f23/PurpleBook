// login.jsx

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (e.g., API calls, authentication checks)
    // Redirect to the main page upon successful login
    // You might want to use a library like react-router for navigation
    // For simplicity, let's assume a successful login redirects to '/main'
    window.location.href = '/main';
  };

  const handleGoogleLogin = () => {
    // Perform Google login logic here
  };

  const handleGithubLogin = () => {
    // Perform GitHub login logic here
  };

  const handleAppleLogin = () => {
    // Perform Apple login logic here
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button type="button" onClick={handleGithubLogin}>
          Login with GitHub
        </button>
        <button type="button" onClick={handleAppleLogin}>
          Login with Apple
        </button>
      </form>
    </div>
  );
};

export default Login;
