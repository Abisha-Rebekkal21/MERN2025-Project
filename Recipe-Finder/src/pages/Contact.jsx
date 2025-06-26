import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Whether you have questions, suggestions, or just want to say hello — drop us a message below.</p>
      </header>

      <section className="contact-details">
        <div className='bg'>
          <h4>📧 Email</h4>
          <p>recipefinder@example.com</p>
        </div>
        <div className='bg'>
          <h4>📞 Phone</h4>
          <p>+91 98765 43210</p>
        </div>
        <div className='bg'>
          <h4>📍 Location</h4>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="social-links">
        <h3>Follow Us</h3>
        <p>
          🌐 Website: www.recipefinder.com<br />
          💬 Instagram: @recipefinder_app<br />
          👍 Facebook: /recipefinderapp<br />
          🐦 Twitter: @recipefinder
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Recipe Finder | Crafted with care to help you cook better 🍳</p>
      </footer>
    </div>
  );
};

export default Contact;
