import React from 'react';
import './About.css'; // Custom styling

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h2>About Recipe Finder</h2>
        <p>Your go-to place for discovering, saving, and sharing delicious recipes.</p>
      </header>

      <section className="mission">
        <h3>🥘 Our Mission</h3>
        <p>
          We believe that cooking should be fun, accessible, and inspiring. Recipe Finder
          empowers food lovers of all skill levels to explore a wide range of dishes from
          around the world — from quick weeknight meals to festive holiday feasts.
        </p>
      </section>

      <section className="features">
        <h3>🔍 What You Can Do</h3>
        <ul>
          <li>Browse and search from a growing library of curated recipes</li>
          <li>View detailed ingredients and step-by-step methods</li>
          <li>Click on any recipe card to view full cooking instructions</li>
          <li>Save your favorites and revisit them any time</li>
        </ul>
      </section>

      <section className="tech-stack">
        <h3>🛠 Built With</h3>
        <p>
          This web application is developed using modern frontend tools:
        </p>
        <ul>
          <li>⚛️ React.js for component-based UI</li>
          <li>💡 React Router for page navigation</li>
          <li>🎨 CSS for styling</li>
          <li>📦 Coming Soon: Backend integration with Node.js & MongoDB</li>
        </ul>
      </section>

      <section className="team">
        <h3>🤝 Connect With Us</h3>
        <p>
          Have a recipe to share or a feature suggestion? Reach out to us!
        </p>
        <p>
          📧 Email: support@recipefinder.com<br />
          💬 Instagram: @recipefinder_app<br />
          🌐 Website: www.recipefinder.com
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Recipe Finder | Made with ❤️ by passionate foodies</p>
      </footer>
    </div>
  );
};

export default About;
