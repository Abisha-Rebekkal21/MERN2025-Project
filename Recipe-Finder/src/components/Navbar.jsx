import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img"/>
        </Link>
      </h2>
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/recipes">Recipes</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
      </div>
    </nav>
  )
}

export default Navbar
