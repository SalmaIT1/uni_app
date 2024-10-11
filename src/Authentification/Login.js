// src/Authentification/Login.js
import React from 'react';
import '../styles/Auth.css';  // Import the CSS file

const Login = () => {
  return (
    <div>
      <form>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input type="text" name="username" placeholder="Enter Username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
