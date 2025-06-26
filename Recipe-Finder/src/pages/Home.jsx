import React from 'react';
import './Home.css'; // Create this file for custom styles
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to <span className="highlight">Recipe Finder</span></h1>
        <p>Discover, cook, and enjoy hundreds of recipes from around the world.</p>
        <div className="cta-buttons">
          
          <Link className="btn" to="/recipes">Browse Recipes</Link>
          <Link  className="btn secondary" to="/about">Learn More</Link>
        </div>
      </header>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>🍽 Easy to Cook</h3>
            <p>Step-by-step instructions for beginner to advanced cooks.</p>
          </div>
          <div className="card">
            <h3>🌍 Global Cuisines</h3>
            <p>Explore recipes from Italian, Indian, Chinese, and many more cultures.</p>
          </div>
          <div className="card">
            <h3>❤️ Personalized Picks</h3>
            <p>Save your favorites and get suggestions based on your taste.</p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <img src="https://source.unsplash.com/1200x400/?food,dishes" alt="Delicious food" />
      </section>

      <footer className="footer">
        <p>🍴 Happy Cooking with Recipe Finder | © 2025</p>
      </footer>
    </div>
  );
};

export default Home;
