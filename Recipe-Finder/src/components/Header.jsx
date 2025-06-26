import React from 'react';
import './Header.css';
import headerVideo from '../assets/header.mp4'; // Ensure you have this video

const Header = () => {
  return (
    <header className="header">
      <video className="header-video" autoPlay muted loop>
        <source src={headerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-text">
        Welcome to Recipe Finder
      </div>
    </header>
  );
};

export default Header;
