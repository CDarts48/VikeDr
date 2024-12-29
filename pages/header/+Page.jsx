import React from 'react';
import { Link } from '../../renderer/Link'; // Use your custom Link component
import './code.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Topher's Maintenance and Repair</h1>
      <nav>
        <ul className="nav">
          <li><Link href="/">Home</Link></li>
          <li><a href="#services-section">Services</a></li>
          <li><a href="#reviews-section">Reviews</a></li>
          <li><a href="mailto:Chris@tophersmandr.com?subject=A Maintenance and Repair Request from">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;