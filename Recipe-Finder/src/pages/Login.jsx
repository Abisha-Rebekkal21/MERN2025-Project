import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const API = 'http://localhost:4000';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/login`, {
        username,
        password,
      });
      console.log(response.data.success)
      if (response.data.success) {
        
        setMessage('Login successful!');
        window.alert("Login successful!");
        setName('');
        setPassword('');
        setTimeout(() => {
          navigate('/recipes');
        }, 1000);
      } else {
        setMessage('Invalid credentials');
        window.alert("Login failed. Check username/password.");
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed!');
    }
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
