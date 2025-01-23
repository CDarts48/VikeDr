import React from 'react';
import './code.css';
import { handleContactClick } from './onClick';

const Header = () => {
  return (
    <header className="header">
      <h1>Topher's Maintenance and Repair</h1>
      <nav>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="#services-section">Services</a></li>
          <li><a href="#reviews-section">Reviews</a></li>
          <li>
            <a
              href="mailto:Chris@tophersmandr.com?subject=A Maintenance and Repair Request from"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;