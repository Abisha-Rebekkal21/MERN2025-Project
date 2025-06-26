import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const API = 'http://localhost:4000';

const Signup = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/signup`, {
        username,
        password,
      });

      setMessage('Signup successful!');
      setName('');
      setPassword('');
      window.alert("Signup successful!");
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed!');
    }
  };

  return (
    <div className="page">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
